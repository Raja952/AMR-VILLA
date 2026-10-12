const IMAGE_CACHE = 'villa-image-cache-v1';
const IMAGE_PATH = /\.(?:avif|gif|jpe?g|png|svg|webp)$/i;

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('villa-image-cache-') && key !== IMAGE_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (
    request.method !== 'GET' ||
    requestUrl.origin !== self.location.origin ||
    !requestUrl.pathname.includes('/assets/') ||
    !IMAGE_PATH.test(requestUrl.pathname)
  ) {
    return;
  }

  event.respondWith(
    caches.open(IMAGE_CACHE).then(async cache => {
      const cachedImage = await cache.match(request);
      if (cachedImage) {
        return cachedImage;
      }

      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        await cache.put(request, response.clone());
      }
      return response;
    })
  );
});

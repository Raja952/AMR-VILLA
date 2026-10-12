import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.development';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    if (environment.production && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js').catch(error => {
        console.error('Image caching service worker registration failed:', error);
      });
    }
  })
  .catch(err => console.error(err));

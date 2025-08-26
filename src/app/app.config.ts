import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import  {Store, provideStore} from '@ngrx/store'
import { routes } from './app.routes';
// import { counterReducer } from './ngRx/counterReducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';    // to configure the store devtools
import { isDevMode } from '@angular/core';
import { mainReducer } from './ngRx/mainReducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(mainReducer), // Register  your reducers here(single reducer in this case)
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
     provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }) 
  ]
};

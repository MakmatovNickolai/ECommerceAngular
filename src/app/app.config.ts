import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mockInterceptor } from './interceptors/mock-interceptor';

const useBackendApi = true;

const providers = [
  provideRouter(routes),
  provideClientHydration()  
];

if (useBackendApi) {
  providers.push(provideHttpClient());
} else {
  providers.push(provideHttpClient(
    withInterceptors([mockInterceptor])
  ));
}

export const appConfig: ApplicationConfig = {
  providers: providers
};

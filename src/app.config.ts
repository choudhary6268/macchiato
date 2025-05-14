import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { definePreset, dt } from '@primeng/themes';

const customPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{purple.50}',
        100: '{purple.100}',
        200: '{purple.200}',
        300: '{purple.300}',
        400: '{purple.400}',
        500: '{purple.500}',
        600: '{purple.600}',
        700: '{purple.700}',
        800: '{purple.800}',
        900: '{purple.900}',
        950: '{purple.950}',
      },
      colorScheme: {
        light: {
          primary: {
            color: '{purple.800}',
            inverseColor: '#ffffff',
            hoverColor: '{purple.900}',
            activeColor: '{purple.800}',
          },
          highlight: {
            background: '{purple.950}',
            focusBackground: '{purple.700}',
            color: '#ffffff',
            focusColor: '#ffffff',
          },
        },
        dark: {
          primary: {
            color: '{purple.50}',
            inverseColor: '{purple.950}',
            hoverColor: '{purple.100}',
            activeColor: '{purple.200}',
          },
          highlight: {
            background: 'rgba(250, 250, 250, .16)',
            focusBackground: 'rgba(250, 250, 250, .24)',
            color: 'rgba(255,255,255,.87)',
            focusColor: 'rgba(255,255,255,.87)',
          },
        },
      },
    },
  });


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: customPreset, options: { darkModeSelector: '.app-dark' } } })
    ]
};

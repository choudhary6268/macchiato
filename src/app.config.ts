import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { definePreset, dt } from '@primeng/themes';

export const MyPreset = definePreset(Aura, {
    primitive: {
      neutral: {
        black: '#D9D8D6',
        darkgray: '#D9D8D6',
        gray: '#D9D8D6',
        darkblue: '#004D71',
        abc: 'rgba(0, 130, 202, 0.1)',
        lightgray: '#D9D8D6',
        white: '#fff',
      },
      blue: {
        dark: '#004D71',
        regular: '#0082CA',
        light: '#54C0E8',
      }
    },
    semantic: {
      primary: {
        500: '{neutral.darkblue}',
      },
      secondary: {
        500: '{neutral.lightgray}',
      }
    },
    components: {
      content: {
        border: {
          radius: 0
        }
      },
      paginator: {
        padding: '1rem',
        borderRadius: 0,
        extend: {
            border: '1px solid {neutral.lightgray}',
            },
            css: () => `
                .p-paginator-border {
                border: ${dt('paginator.border')};
                }
            `,
            nav: {
            button: {
                selected: {
                background: '{neutral.darkblue}',
                hover: '{neutral.darkblue}',
                color: '{neutral.white}'
                }
            }
            }
        },
        button: {

        }
    }
});


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: MyPreset, options: { darkModeSelector: '.app-dark' } } })
    ]
};

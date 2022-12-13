import 'i18next';
import fr from './lang/fr';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    resources: typeof fr;
    defaultNS: 'common';
  }
}

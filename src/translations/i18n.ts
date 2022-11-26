import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './lang/en';
import french from './lang/fr';

export const resources = {
  en: english,
  fr: french,
} as const;

export const ns = Object.keys(resources.fr);

export default i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    ns,
  });

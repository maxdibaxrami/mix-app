// i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { cloudStorage } from '@telegram-apps/sdk';

import en from '../locales/en.json';
import ru from '../locales/ru.json';
import ar from '../locales/ar.json';
import fa from '../locales/fa.json';

const getStoredLanguage = async () => {
  if (cloudStorage.isSupported()) {
    const storedLang = await cloudStorage.getItem('lang');
    return storedLang || 'en'; // Default to 'en' if no stored language
  } else {
    return localStorage.getItem('lang') || 'en'; // Fallback to localStorage and default to 'en'
  }
};

export const initializeI18n = async () => {
  const storedLanguage = await getStoredLanguage();

  await i18next
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ru: { translation: ru },
        ar: { translation: ar },
        fa: { translation: fa },
      },
      lng: storedLanguage, // Set the default language
      fallbackLng: 'en', // Fallback to English if no matching translation is found
      interpolation: {
        escapeValue: false, // React already does escaping
      },
    });
};

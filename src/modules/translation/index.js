import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {memoize} from 'lodash';
import {I18nManager} from 'react-native';

// import en from './locales/en.json'; for future
import ru from './locales/ru.json';

const translationGetters = {
  // en: () => en,
  ru: () => ru,
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'ru', isRTL: false}; //todo ru change to en when it will be ready

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

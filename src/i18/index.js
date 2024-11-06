import { createI18n } from "vue-i18n";

const messages = {
  TM: {},
  RU: {},
  EN: {},
};

export const i18n = createI18n({
  locale: "TM",
  fallbackLocale: "TM",
  messages,
});
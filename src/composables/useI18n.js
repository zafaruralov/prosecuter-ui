import { useI18n as vueUseI18n } from 'vue-i18n'

/**
 * @returns {Object}
 */
export function useI18n() {
  const { t, locale, availableLocales } = vueUseI18n()

  /**
   * @param {string} newLocale
   */
  const changeLocale = (newLocale) => {
    if (availableLocales.includes(newLocale)) {
      locale.value = newLocale
      localStorage.setItem('locale', newLocale)
    }
  }

  return {
    t,
    locale,
    availableLocales,
    changeLocale
  }
}


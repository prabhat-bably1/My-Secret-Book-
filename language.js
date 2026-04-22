function getMSBSettings() {
  return JSON.parse(localStorage.getItem("msb_site_settings") || "null") || {};
}

function getSelectedLanguageCode() {
  const settings = getMSBSettings();

  if (settings.languageType === "global") {
    const map = {
      English: "en",
      Spanish: "en",
      French: "en",
      German: "en",
      Italian: "en",
      Portuguese: "en",
      Russian: "en",
      Arabic: "en",
      Chinese: "en",
      Japanese: "en",
      Korean: "en",
      Turkish: "en",
      Thai: "en",
      Indonesian: "en"
    };
    return map[settings.globalLanguage] || "en";
  }

  const map = {
    Hindi: "hi",
    English: "en",
    Odia: "or",
    Gujarati: "gu"
  };

  return map[settings.indianLanguage] || "en";
}

function applyMSBLanguage() {
  const langCode = getSelectedLanguageCode();
  const dict = MSB_TRANSLATIONS[langCode] || MSB_TRANSLATIONS.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.setAttribute("lang", langCode);
}

document.addEventListener("DOMContentLoaded", applyMSBLanguage);

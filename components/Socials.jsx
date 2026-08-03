import { useI18n } from "../i18n/I18nProvider";

const localeOptions = ["ar", "en", "fr"];

const Socials = () => {
  const { locale, setLocale, t } = useI18n();
  return (
    <div className="flex shrink-0 items-center gap-1 text-xs sm:gap-2 sm:text-sm" role="group" aria-label={t("common.language")}>
      {localeOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={`${locale === option ? "bg-accent text-white" : "hover:text-accent"} min-h-11 min-w-11 rounded-full px-2 uppercase transition-all duration-300 sm:px-3`}
          aria-pressed={locale === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Socials;

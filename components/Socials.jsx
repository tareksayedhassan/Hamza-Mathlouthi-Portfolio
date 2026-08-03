import { useI18n } from "../i18n/I18nProvider";

const localeOptions = ["ar", "en", "fr"];

const Socials = () => {
  const { locale, setLocale, t } = useI18n();
  return (
    <div className="flex items-center gap-x-2 text-sm" role="group" aria-label={t("common.language")}>
      {localeOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={`${locale === option ? "bg-accent text-white" : "hover:text-accent"} rounded-full px-3 py-1 uppercase transition-all duration-300`}
          aria-pressed={locale === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Socials;

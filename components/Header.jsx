import Link from "next/link";

import Socials from "../components/Socials";
import { useI18n } from "../i18n/I18nProvider";

const Header = () => {
  const { t } = useI18n();
  return (
    <header className="absolute inset-x-0 top-0 z-40 w-full px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex min-h-24 items-center justify-between gap-4 py-5">
          {/* logo */}
          <Link href="/" aria-label={t("accessibility.logo")} className="min-w-0 text-lg font-semibold tracking-tight sm:text-2xl">
            {t("home.title")}<span className="text-accent">.</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";

import Socials from "../components/Socials";
import { useI18n } from "../i18n/I18nProvider";

const Header = () => {
  const { t } = useI18n();
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" aria-label={t("accessibility.logo")} className="text-xl md:text-2xl font-semibold tracking-tight">
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

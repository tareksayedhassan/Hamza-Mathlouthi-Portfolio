import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import { useI18n } from "../i18n/I18nProvider";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const { direction, t } = useI18n();
  return (
    <div
      dir={direction}
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>{t("meta.title")}</title>
        <meta
          name="description"
          content={t("meta.description")}
        />
        <meta
          name="keywords"
          content={t("meta.keywords")}
        />
        <meta name="author" content="Hamza Mathlouthi" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;

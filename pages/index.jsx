import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import { useI18n } from "../i18n/I18nProvider";

const Home = () => {
  const { direction, t } = useI18n();
  const isRtl = direction === "rtl";

  return (
    <div className="relative min-h-[100dvh] bg-primary/60 px-4 pb-32 pt-28 sm:px-6 xl:pb-10">
      {/* text */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" aria-hidden />
        <div className="page-container flex min-h-[calc(100dvh-10rem)] flex-col justify-center text-center xl:items-start xl:pt-28 xl:text-start">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 max-w-4xl xl:max-w-[62%]"
          >
            {t("home.title")} <br />
            <span className="text-accent">{t("home.accent")}</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flow-copy mx-auto mb-8 max-w-xl xl:mx-0 xl:mb-10"
          >
            {t("home.summary")}
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      {/* image */}
      <div
        className={`absolute bottom-0 h-full w-[min(1280px,100vw)] ${isRtl ? "left-0" : "right-0"}`}
      >
        {/* bg img */}
        <div
          role="img"
          className={`translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-no-repeat ${isRtl ? "xl:bg-left" : "xl:bg-right"}`}
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`absolute bottom-0 hidden h-auto max-h-[72vh] w-[clamp(440px,36vw,560px)] items-end xl:flex ${isRtl ? "left-[3%] justify-start" : "right-[3%] justify-end"}`}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

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
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`h1 xl:max-w-[58%] ${isRtl ? "xl:ml-auto" : "xl:mr-auto"}`}
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
            className={`mx-auto mb-10 max-w-sm xl:mb-16 xl:max-w-xl ${isRtl ? "xl:ml-auto xl:mr-0" : "xl:ml-0 xl:mr-auto"}`}
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
          className={`absolute bottom-0 flex h-auto max-h-[72vh] w-[clamp(440px,36vw,560px)] items-end ${isRtl ? "left-[3%] justify-start" : "right-[3%] justify-end"}`}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

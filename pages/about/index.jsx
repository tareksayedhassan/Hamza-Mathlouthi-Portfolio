import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useI18n } from "../../i18n/I18nProvider";

const About = () => {
  const [index, setIndex] = useState(0);
  const { direction, t } = useI18n();
  const isRtl = direction === "rtl";
  const aboutData = t("about.tabs");
  const counters = t("about.counters");

  return (
    <div className="page-section text-center xl:text-start">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn(isRtl ? "left" : "right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={`absolute bottom-0 hidden w-[clamp(500px,36vw,580px)] items-end xl:flex ${isRtl ? "-right-[390px]" : "-left-[390px]"}`}
      >
        <Avatar />
      </motion.div>

      <div className="page-container flex min-h-[calc(100dvh-12rem)] flex-col items-center gap-10 xl:flex-row xl:gap-8">
        {/* text */}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {t("about.title")} <span className="text-accent">{t("about.accent")}</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="flow-copy mx-auto mb-6 max-w-xl px-2 xl:mx-0 xl:mb-10 xl:px-0"
          >
            {t("about.summary")}
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-8 hidden w-full max-w-2xl md:flex xl:mx-0"
          >
            <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
              {counters.map((counter, counterIndex) => (
                <div key={counter.label} className="relative min-w-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2"><CountUp start={0} end={counter.value} duration={5} />+</div>
                  <div className="text-xs uppercase tracking-wide leading-[1.5]">{counter.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex min-w-0 w-full flex-col xl:max-w-[52%]"
        >
          <div className="mx-auto mb-5 flex max-w-full flex-wrap justify-center gap-x-5 gap-y-4 xl:mx-0 xl:justify-start xl:gap-x-8" role="tablist" aria-label={t("about.title")}>
            {aboutData.map((item, itemI) => (
              <button
                type="button"
                key={item.title}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } relative min-h-11 capitalize after:absolute after:bottom-0 after:start-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                onClick={() => setIndex(itemI)}
                role="tab"
                aria-selected={index === itemI}
                aria-controls="about-tab-panel"
              >
                {item.title}
              </button>
            ))}
          </div>

          <div id="about-tab-panel" role="tabpanel" className="flex min-w-0 flex-col items-center gap-y-4 py-2 xl:items-start xl:py-6">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={`${item.title}-${itemI}`}
                className="flex min-w-0 w-full flex-col items-center text-center text-white/60 xl:items-start xl:text-start"
              >
                {/* title */}
                <div className="flex min-w-0 flex-col items-center gap-1 md:flex-row md:flex-wrap xl:items-start">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {item.stage && <div className="hidden md:flex">—</div>}
                  <div>{item.stage}</div>
                </div>
                {item.description && <p className="mt-2 max-w-[65ch] text-sm leading-relaxed">{item.description}</p>}

              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

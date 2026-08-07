import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { BsLinkedin } from "react-icons/bs";

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
    <div className="page-section flex items-center text-center xl:text-start">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn(isRtl ? "left" : "right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={`absolute bottom-0 hidden w-[clamp(260px,20vw,360px)] items-end xl:flex ${isRtl ? "right-0 justify-end" : "left-0 justify-start"}`}
      >
        <Avatar />
      </motion.div>

      <div className="page-container flex flex-col items-center gap-10 xl:flex-row xl:gap-8">
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

          <motion.a
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            href="https://www.linkedin.com/in/hamza-mathlouthi-a23023338?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hamza Mathlouthi on LinkedIn"
            className="mx-auto mb-6 inline-flex min-h-11 items-center gap-2 self-center rounded-lg border border-[#0A66C2]/60 bg-[#0A66C2]/10 px-4 py-2 text-[#70b7ff] transition-colors hover:bg-[#0A66C2] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70b7ff] xl:mx-0 xl:self-start"
          >
            <BsLinkedin className="text-xl" aria-hidden />
            <span>LinkedIn</span>
          </motion.a>

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
                className={`flex min-w-0 w-full flex-col items-center text-center xl:items-start xl:text-start ${
                  item.rowTone === "red" ? "text-red-500" : "text-white/60"
                }`}
              >
                {/* title */}
                <div className="flex min-w-0 flex-col items-center gap-1 md:flex-row md:flex-wrap xl:items-start">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {item.stage && <div className="hidden md:flex">—</div>}
                  <div className={item.stageTone === "yellow" ? "text-yellow-600" : ""}>{item.stage}</div>
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

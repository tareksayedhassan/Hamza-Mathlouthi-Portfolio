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
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
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

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
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
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {t("about.summary")}
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {counters.map((counter, counterIndex) => (
                <div key={counter.label} className={`relative flex-1 ${counterIndex < counters.length - 1 ? "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0" : ""}`}>
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2"><CountUp start={0} end={counter.value} duration={5} />+</div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">{counter.label}</div>
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
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={item.title}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={`${item.title}-${itemI}`}
                className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-center xl:text-left text-white/60"
              >
                {/* title */}
                <div className="flex flex-col md:flex-row gap-x-2 items-center xl:items-start">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {item.stage && <div className="hidden md:flex">—</div>}
                  <div>{item.stage}</div>
                </div>
                {item.description && <p className="text-xs leading-relaxed max-w-[560px] mt-1">{item.description}</p>}

              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

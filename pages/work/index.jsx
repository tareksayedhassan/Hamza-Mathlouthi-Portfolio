import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import { useI18n } from "../../i18n/I18nProvider";

const Work = () => {
  const { t } = useI18n();
  return (
    <div className="page-section flex items-center">
      <Circles />
      <div className="page-container">
        <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex min-w-0 flex-col text-center xl:w-[30%] xl:text-start">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              {t("work.title")} <span className="text-accent">{t("work.accent")}</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flow-copy mx-auto mb-4 max-w-md xl:mx-0"
            >
              {t("work.intro")}
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-w-0 w-full xl:max-w-[70%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

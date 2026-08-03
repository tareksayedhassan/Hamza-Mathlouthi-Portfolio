import { FaLanguage } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useI18n } from "../i18n/I18nProvider";

const TestimonialSlider = () => {
  const { t } = useI18n();
  const languageData = t("languages.levels");
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="w-full pb-12"
    >
      {languageData.map((language) => (
        <SwiperSlide key={language.name}>
          <div className="flex min-h-[320px] min-w-0 flex-col items-center justify-center gap-8 px-10 sm:px-14 md:flex-row">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto text-7xl text-accent">
                  <FaLanguage aria-hidden />
                </div>

                {/* name */}
                <div className="text-lg">{language.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {language.score}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="relative flex min-w-0 flex-1 flex-col justify-center xl:before:absolute xl:before:inset-y-0 xl:before:start-0 xl:before:w-px xl:before:bg-white/20 xl:ps-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaLanguage
                  className="mx-auto text-4xl text-white/20 md:mx-0 xl:text-6xl"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="text-center text-lg md:text-start">
                {language.level}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;

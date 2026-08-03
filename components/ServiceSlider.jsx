import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useI18n } from "../i18n/I18nProvider";

const serviceIcons = [RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket];

const ServiceSlider = () => {
  const { t } = useI18n();
  const serviceData = t("services.items");
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="w-full pb-10"
    >
      {serviceData.map((item, i) => {
        const Icon = serviceIcons[i];
        return <SwiperSlide key={item.title}>
          <article className="group flex min-h-[250px] min-w-0 flex-col rounded-lg bg-[rgba(65,47,123,0.15)] px-5 py-6 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:min-h-[310px] sm:px-6 sm:py-8">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-6 min-w-0 flex-1">
              <h3 className="mb-2 text-lg font-medium leading-snug">{item.title}</h3>
              <p className="leading-relaxed">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </article>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ServiceSlider;

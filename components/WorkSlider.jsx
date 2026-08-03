import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useI18n } from "../i18n/I18nProvider";

const projectImages = ["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg", "/thumb4.jpg"];

const WorkSlider = () => {
  const { direction, t } = useI18n();
  const projects = t("work.items");
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      <SwiperSlide>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {projects.map((project, projectIndex) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={project.title}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={projectImages[projectIndex]}
                    alt=""
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.08em] px-3 text-center" title={project.description}>
                      <div className="delay-100">{project.title}</div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight className={direction === "rtl" ? "rotate-180" : ""} aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default WorkSlider;

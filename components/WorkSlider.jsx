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
      className="w-full pb-10"
    >
      <SwiperSlide>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, projectIndex) => (
              <div
                className="group relative min-w-0 overflow-hidden rounded-lg"
                key={project.title}
              >
                <article className="group relative aspect-[5/3] overflow-hidden bg-primary/50">
                  {/* image */}
                  <Image
                    src={projectImages[projectIndex]}
                    alt=""
                    width={500}
                    height={300}
                    sizes="(max-width: 639px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent opacity-80 transition-all duration-700 sm:opacity-0 sm:group-hover:opacity-80"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-300 sm:translate-y-full sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0">
                    <div className="flex min-w-0 items-center justify-center gap-2 text-center text-sm tracking-wide" title={project.description}>
                      <h3 className="min-w-0 font-medium">{project.title}</h3>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight className={direction === "rtl" ? "rotate-180" : ""} aria-hidden />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default WorkSlider;

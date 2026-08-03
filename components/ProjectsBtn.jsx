import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";
import { useI18n } from "../i18n/I18nProvider";

const ProjectsBtn = () => {
  const { direction, t } = useI18n();
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        aria-label={t("accessibility.projectsButton")}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowRight
          className={`absolute text-4xl transition-all duration-300 ${direction === "rtl" ? "rotate-180 group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;

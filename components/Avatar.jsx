import Image from "next/image";
import { useI18n } from "../i18n/I18nProvider";

const Avatar = () => {
  const { direction, t } = useI18n();
  const isRtl = direction === "rtl";
  return (
    <div className="pointer-events-none hidden flex-none select-none items-end justify-center xl:flex">
      <Image
        src={isRtl ? "/avatar.png" : "/avatar.en.png"}
        alt={t("accessibility.avatar")}
        width={737}
        height={678}
        className="translate-z-0 h-auto max-h-[72vh] w-auto max-w-full object-contain"
      />
    </div>
  );
};

export default Avatar;

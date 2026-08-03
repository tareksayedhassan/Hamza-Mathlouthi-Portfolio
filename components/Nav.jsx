import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../i18n/I18nProvider";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { nameKey: "nav.home", path: "/", Icon: HiHome },
  { nameKey: "nav.about", path: "/about", Icon: HiUser },
  { nameKey: "nav.services", path: "/services", Icon: HiRectangleGroup },
  { nameKey: "nav.work", path: "/work", Icon: HiViewColumns },
  {
    nameKey: "nav.testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    nameKey: "nav.contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const { direction, t } = useI18n();

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-50 flex justify-center xl:inset-y-0 xl:start-auto xl:end-[2%] xl:w-16 xl:items-center">
      <div className="flex h-20 w-full items-center justify-around bg-primary/90 px-2 text-2xl shadow-2xl backdrop-blur-md xl:h-auto xl:flex-col xl:gap-7 xl:rounded-full xl:bg-white/10 xl:px-3 xl:py-5 xl:text-xl">
        {navData.map((link) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } group relative flex min-h-11 min-w-11 items-center justify-center rounded-full hover:text-accent transition-all duration-300`}
            href={link.path}
            key={link.path}
            aria-label={t(link.nameKey)}
            aria-current={link.path === pathname ? "page" : undefined}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className={`absolute hidden whitespace-nowrap xl:group-hover:flex xl:group-focus-within:flex ${direction === "rtl" ? "ps-14 start-0" : "pe-14 end-0"}`}
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {t(link.nameKey)}
                </div>

                {/* triangle */}
                <div
                  className={`border-solid border-y-transparent border-y-[6px] absolute ${direction === "rtl" ? "border-r-white border-r-8 border-l-0 -left-2" : "border-l-white border-l-8 border-r-0 -right-2"}`}
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

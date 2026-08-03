import Image from "next/image";

const Bulb = () => {
  return (
    <div className="pointer-events-none absolute -bottom-12 start-0 z-10 w-[180px] -translate-x-1/2 rotate-12 select-none mix-blend-color-dodge animate-pulse xl:w-[260px]">
      <Image
        src="/bulb.png"
        alt=""
        width={260}
        height={200}
        className="h-auto w-full object-contain"
      />
    </div>
  );
};

export default Bulb;

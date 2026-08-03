import Image from "next/image";

const Circles = () => {
  return (
    <div className="pointer-events-none absolute -bottom-2 end-0 z-10 w-[160px] translate-x-1/3 select-none mix-blend-color-dodge animate-pulse sm:w-[200px] xl:w-[300px]">
      <Image
        src="/circles.png"
        alt=""
        width={260}
        height={200}
        className="h-auto w-full object-contain"
      />
    </div>
  );
};

export default Circles;

import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="pointer-events-none absolute start-0 top-0 z-10 w-[160px] select-none opacity-50 mix-blend-color-dodge sm:w-[200px] xl:w-[400px]">
      <Image
        src="/top-left-img.png"
        alt=""
        width={400}
        height={400}
        sizes="(max-width: 639px) 160px, (max-width: 1199px) 200px, 400px"
        className="h-auto w-full object-contain"
      />
    </div>
  );
};

export default TopLeftImg;

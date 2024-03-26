import Image from "next/image";

const SloganCardLeftImg = (props) => {
  const { src, title, deskripsi, index } = props;
  return (
    <div className="w-[1080px] flex">
      <Image src={src} alt={`Slogan ${index} media`} className="w-[540px]" />
      <div className="w-[540px] px-[27px] flex flex-col justify-center">
        <p className="italic font-bold text-[26px] text-primary2 leading-[31.2px]">{`${title}`.toUpperCase()}</p>
        <p className=" text-primary1 text-[15px] mt-[14px] leading-[21px] font-medium">{`${deskripsi}`.toUpperCase()}</p>
      </div>
    </div>
  );
};

const SloganCardRightImg = (props) => {
  const { src, title, deskripsi, index } = props;
  return (
    <div className="w-[1080px] flex">
      <div className="w-[540px] px-[27px] flex flex-col justify-center">
      <p className="italic font-bold text-[26px] text-primary2 leading-[31.2px]">{`${title}`.toUpperCase()}</p>
        <p className=" text-primary1 text-[15px] mt-[14px] leading-[21px] font-medium">{`${deskripsi}`.toUpperCase()}</p>
      </div>
      <Image src={src} alt={`Slogan ${index} media`} className="w-[540px]" />
    </div>
  );
};

export { SloganCardLeftImg, SloganCardRightImg };

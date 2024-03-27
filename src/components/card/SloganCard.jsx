import Image from "next/image";

const SloganCardLeftImg = (props) => {
  const { src, title, deskripsi, index } = props;
  return (
    <div className="flex flex-col mt-5 md:mt-0 md:flex-row px-[27px] md:px-0">
      <Image src={src} alt={`Slogan ${index} media`} className="md:w-[540px]" />
      <div className="md:w-[540px] md:px-[27px] flex flex-col justify-center shadow-sm px-4 py-2 md:shadow-none md:p-0 rounded-md md:rounded-none">
        <p className="italic font-bold text-lg md:text-[26px] text-primary2 mt-3 md:mt-0 md:leading-[31.2px] text-center md:text-left">
          {`${title}`.toUpperCase()}
        </p>
        <p className="text-primary1 text-sm md:text-[15px] mt-[14px] md:leading-[21px] font-medium text-justify">
          {`${deskripsi}`.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

const SloganCardRightImg = (props) => {
  const { src, title, deskripsi, index } = props;
  return (
    <div className="flex flex-col-reverse mt-5 md:mt-0 md:flex-row px-[27px] md:px-0">
      <div className="md:w-[540px] md:px-[27px] flex flex-col justify-center shadow-sm px-4 py-2 md:shadow-none md:p-0">
        <p className="italic font-bold text-lg md:text-[26px] text-primary2 mt-3 md:mt-0 md:leading-[31.2px] rounded-md md:rounded-none text-center md:text-left"> 
          {`${title}`.toUpperCase()}
        </p>
        <p className="text-primary1 text-sm md:text-[15px] mt-[14px] md:leading-[21px] font-medium text-justify">
          {`${deskripsi}`.toUpperCase()}
        </p>
      </div>
      <Image
        src={src}
        alt={`Slogan ${index} media`}
        className="w-full md:w-[540px]"
      />
    </div>
  );
};

export { SloganCardLeftImg, SloganCardRightImg };

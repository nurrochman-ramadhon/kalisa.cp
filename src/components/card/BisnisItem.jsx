import Image from "next/image";

const BisnisItem = (props) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative">
        <Image src={props.src} className="w-[219px] h-[203px]" />
      </div>
      <h1 className="text-center m-[30px] font-bold text-[24px] text-primary1 w-auto flex justify-center relative">
        {props.subtitle}
        <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-1/12 h-1 bg-primary1 rounded-lg"></span>
      </h1>
      <p className="text-primary1 text-[14px] font-medium text-center">
        {props.description}
      </p>
    </section>
  );
};

export default BisnisItem;

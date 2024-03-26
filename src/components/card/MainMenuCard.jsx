import Image from "next/image";

const MainMenuCard = (props) => {
  return (
    <div className="relative">
      <Image
        src={props.src}
        alt={`${props.titleButton} Media`}
        className="h-[215px] w-[360px]"
      />
      <div className="absolute flex inset-0 justify-center items-center">
        <button className="w-[220px] h-[62px] rounded-md font-semibold text-base bg-white text-primary1 hover:bg-neutral-200">
          {props.titleButton}
        </button>
      </div>
    </div>
  );
};
export default MainMenuCard;

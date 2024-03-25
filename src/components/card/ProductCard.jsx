import Image from "next/image";

const ProductCard = (props) => {
  return (
    <div>
      <Image src={props.src} className="w-[307px] h-[265px]" />
      <div className="flex justify-center">
        <button className="bg-primary2 font-semibold text-white w-[163px] h-[49px] rounded-[55px] mt-[35px] transition duration-300 ease-in-out hover:bg-pink-600">
          {props.titleButton}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

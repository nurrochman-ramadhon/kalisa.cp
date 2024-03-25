import ProductCard from "../../components/card/ProductCard";
import Product1 from "../../../public/assets/Rectangle 13.png";
import Product2 from "../../../public/assets/Rectangle 14.png";
import Product3 from "../../../public/assets/Rectangle 15.png";
import Product4 from "../../../public/assets/Rectangle 19.png";
import Product5 from "../../../public/assets/Rectangle 20.png";
import Product6 from "../../../public/assets/Rectangle 21.png";

const Product = () => {
  const products = [
    { product: Product1, buttonTitle: "Selengkapnya" },
    { product: Product2, buttonTitle: "Selengkapnya" },
    { product: Product3, buttonTitle: "Selengkapnya" },
    { product: Product4, buttonTitle: "Coming Soon" },
    { product: Product5, buttonTitle: "Coming Soon" },
    { product: Product6, buttonTitle: "Coming Soon" },
  ];

  return (
    <section>
      <h1 className="text-center m-[30px] font-bold text-4xl text-primary1 w-full flex justify-center relative">
        Produk Kami
        <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-1/12 h-1 bg-primary1 rounded-lg"></span>
      </h1>
      <p className="text-center text-[18px] font-medium text-primary1 w-1/2 mx-auto">
        Dengan hasil riset yang dikembangkan sampai saat ini terciptalah produk
        dengan standar kualitas tinggi dan diuji dengan basis ilmu pengetahuan.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-[53px] justify-center w-8/12 mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            src={product.product}
            titleButton={product.buttonTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;

import Image from "next/image";
import BisnisItem from "../../components/card/BisnisItem";

const AboutUsCard = (props) => {
  const { title, description, content, index } = props;

  if (content) {
    return (
      <div key={index}>
        <h1 className="text-center m-[30px] font-bold text-[24px] mt-[96px]  text-primary1 w-auto flex justify-center relative">
          {title}
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-1/12 h-1 bg-primary1 rounded-lg"></span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-[960px] mt-16">
          {content.map((content, index) => {
            return (
              <BisnisItem
                key={index}
                src={content.src}
                description={content.desc}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div key={index}>
        <h1 className="text-center m-[30px] font-bold text-[24px] mt-[96px]  text-primary1 w-auto flex justify-center relative">
          {title}
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-1/12 h-1 bg-primary1 rounded-lg"></span>
        </h1>
        <p className="text-[14px] text-primary1 text-center w-8/12 mx-auto font-medium">
          {description}
        </p>
      </div>
    );
  }
};

export default AboutUsCard;

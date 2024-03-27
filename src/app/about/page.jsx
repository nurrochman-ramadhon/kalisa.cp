import Image from "next/image";
import Banner from "../../../public/assets/frame2/main-banner-2.jpg";
import image1 from "../../../public/assets/frame2/image1 2.png";
import image2 from "../../../public/assets/frame2/image2 2.png";
import image3 from "../../../public/assets/frame2/image3 2.png";
import image4 from "../../../public/assets/frame2/image4 2.png";
import AboutUsCard from "../../components/card/AboutUsCard";

const About = () => {
  const aboutContent = [
    {
      title: "VISI KAMI",
      description:
        "Mencapai masa depan cerah dengan hidup yang lebih sehat dan sejahtera dan menciptakan produk yang berkualitas  dengan permintaan pasar saat ini yang memiliki manfaat untuk sesama.",
      content: "",
    },
    {
      title: "MISI KAMI",
      content: [
        {
          src: image1,
          desc: "1.	Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital dan bagaimana untuk menguasai pasar digital dengan materi yang mudah dipahami dan terus mengikuti update.",
        },
        {
          src: image2,
          desc: "2.	Menciptakan produk yang berkualitas dengan banyak permintaan pasar sehingga mudah untuk dijual secara offline maupun online dengan harga ekonomis profit naik drastis.",
        },
        {
          src: image3,
          desc: "3.	Mencapai kesuksesan bersama dengan hidup yang lebih sehat dan sejahtera serta memberi manfaat untuk sesama.",
        },
        {
          src: image4,
          desc: "4.	Menciptakan bisnis yang jujur dan Amanah guna untuk meningkatkan kepercayaan masyarakat. ",
        },
      ],
    },
    {
      title: "PRINSIP KAMI",
      description:
        "Menciptakan bisnis yang sehat dan permintaan produk yang terus meningkat melalui distributor kami yang tersebar diseluruh kota besar di Indonesia. Kami berkomitmen untuk meningkatkan perekonomian pelanggan kami. Jaringan distributor membawa produk kami kepada masyarakat dan membuatnya mudah diakses oleh pelanggan kami.",
      content: "",
    },
    {
      title: "TIM KAMI",
      description:
        "Tim kami yang berasal dari berbagai macam latar belakang bisnis dan pengalaman dengan jiwa muda yang membara menggabungkan ide - ide brilian akan menciptakan suatu sitem bisnis yang luar biasa.",
      content: "",
    },
  ];
  return (
    <main className="mb-[78px]">
      {/* Banner */}
      <section>
        {/* Pembungkus utama */}
        <div className="relative h-screen">
          {/* Image untuk banner utama disini */}
          <Image
            src={Banner}
            alt="Banner"
            className="pointer-events-none h-screen object-center object-cover md:object-top md:object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center w-full">
            <h1 className="text-center font-bold text-[32px] md:text-[48px] text-primary3 relative">
              TENTANG KAMI
              <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-8/12 h-1 bg-primary3 rounded-lg"></span>
            </h1>
            <p className="text-primary3 font-semibold text-md md:text-lg text-center max-w-[850px] px-4 my-4">
              Kami berdiri pada tahun 2021, dengan nama PT. Kalisa Sehat
              Sejahtera yang telah menunjukan pendekatan yang berbeda untuk
              bisnis. Kami memulai dengan konsep inovatif berpadu dengan
              produk-produk berkualitas tinggi dan peluang bisnis yang dapat
              diikuti oleh orang awam sekaligus dengan system yang profitable.
            </p>
            <button className="bg-primary3 hover:bg-neutral-200 text-primary1 w-[287px] h-[57px] rounded-[42px] font-semibold text-[24px] mt-[23px]">
              SELENGKAPNYA
            </button>
          </div>
        </div>
      </section>
      {aboutContent.map((aboutContent, index) => {
        return (
          <AboutUsCard
            title={aboutContent.title}
            description={aboutContent.description}
            content={aboutContent.content}
            index={index}
          />
        );
      })}

      <section></section>
    </main>
  );
};

export default About;

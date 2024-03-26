import Image from "next/image";
import Banner from "../../../public/assets/image 6.png";
import BisnisItem from "../../components/card/BisnisItem";
import Ilust1 from "../../../public/assets/undraw_content_team_3epn 1.png";
import Ilust2 from "../../../public/assets/undraw_mobile_marketing_re_p77p 1.png";
import Ilust3 from "../../../public/assets/undraw_time_management_re_tk5w 1.png";
import Ilust4 from "../../../public/assets/undraw_work_chat_re_qes4 1.png";

const illustrations = [
  {
    src: Ilust3,
    subtitle: "ATUR JAM KERJA ANDA",
    description:
      "Anda memiliki kebebasan untuk menjadi bos Anda sendiri dan bekerja di jam Anda yang telah Anda atur sendiri. Bekerja secara paruh waktu atau penuh waktu - itu adalah pilihan Anda.",
  },
  {
    src: Ilust1,
    subtitle: "KERAGAMAN PRODUK",
    description:
      "Kalisa Sehat Sejahtera menawarkan berbagai Paket Produk untuk menjalankan bisnis Anda. Apakah Anda memiliki minat pada kecantikan, perawatan kulit atau lainnya yang disesuaikan dengan kebutuhan Anda. Itu pilihan Anda.",
  },
  {
    src: Ilust2,
    subtitle: "PELATIHAN BISNIS",
    description:
      "Dengan perangkat pendukung dan pelatihan ahli, Anda akan menemukan segalanya di sini untuk membangun bisnis Anda. dengan pelatihan ini anda akan dibimbing melaluli materi yang disediakan sampai bisnis anda pecah telur",
  },
  {
    src: Ilust4,
    subtitle: "SUPPORT WEBSITE",
    description:
      "Dengan adanya website support yang disediakan akan menjadikan bisnis anda menjadi lebih profesional dan meningkatkan traffic untuk penjualan anda",
  },
];

const BisnisPage = () => {
  return (
    <section>
      <div className="relative h-screen">
        <Image
          src={Banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center w-full">
          <h1 className="text-center font-bold text-[32px] md:text-[48px] text-primary3 relative">
            Peluang Bisnis
            <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-8/12 h-1 bg-primary3 rounded-lg"></span>
          </h1>
          <p className="text-primary3 font-semibold text-md md:text-lg text-center max-w-[850px] px-4 my-4">
            Kami membuka suatu peluang bisnis untuk pelanggan kami dengan
            fleksibel dari PT. Kalisa Sehat Sejahtera. Bergabung dan buatlah
            suatu jaringan bisnis yang menyenangkan dengan berbagai macam paket
            plan yang profitable.
          </p>
          <button className="bg-primary3 hover:bg-neutral-200 text-primary1 w-[287px] h-[57px] rounded-[42px] font-semibold text-[24px]">
            PELUANG BISNIS
          </button>
        </div>
      </div>
      <p className="text-center mx-auto w-10/12 lg:w-full my-[46px] font-semibold text-lg text-primary1">
        PT. Kalisa Sehat Sejahtera bukan sekedar bisnis biasa pada umumnya.
        Dengan produk yang kami ciptakan anda dapat mencapai impian anda menjadi
        sukses dan meningkatkan kesadaran hidup sehat dan sejahtera. Buatlah
        suatu perubahan dala hidup anda mulai sekarang dan ajak orang-orang
        sekitar untuk membantu meningkatkan kehidupan mereka.
      </p>
      <h1 className="text-center m-[30px] font-bold text-[24px] mt-[96px]  text-primary1 w-auto flex justify-center relative">
        MEMBANGUN BISNIS ANDA SENDIRI
        <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-1/12 h-1 bg-primary1 rounded-lg"></span>
      </h1>
      <p className="text-[14px] text-primary1 text-center w-8/12 mx-auto font-medium">
        Bekerja dengan waktu yang fleksibel menjadi salah satu tujuan Kalisa
        Sehat Sejahtera. Bebaskan diri Anda dari rutinitas ‘9 hingga 5’ -
        rancang jadwal Anda dan tentukan jam kerja Anda sendiri. Bangun bisnis
        Anda yang dapat disesuiaikan dengan gaya hidup Anda Ketika fleksibilitas
        terbukti memiliki pengaruh positif yang sangat besar pada keseimbangan
        kehidupan kerja, peluang seperti ini bisa menjadi apa yang Anda
        butuhkan.
      </p>
      <h1 className="text-center text-primary1 font-semibold my-2 text-[14px]">
        Daftar hari ini dan jadilah Member Kalisa Sehat Sejahtera.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-[960px] mt-16">
        {illustrations.map((illustration, index) => (
          <BisnisItem
            key={index}
            src={illustration.src}
            subtitle={illustration.subtitle}
            description={illustration.description}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-primary2 font-semibold text-white w-[347px] h-[67px] rounded-[55px] my-[70px] transition duration-300 ease-in-out hover:bg-pink-600">
          DAFTAR DI SINI
        </button>
      </div>
    </section>
  );
};

export default BisnisPage;

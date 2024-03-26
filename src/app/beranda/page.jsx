import Image from "next/image";
import mainBannerImg from "../../../public/assets/frame1/main-banner-_1.jpg";
import image1 from "../../../public/assets/frame1/image left.png";
import image2 from "../../../public/assets/frame1/image center.png";
import image3 from "../../../public/assets/frame1/image right.png";
import MainMenuCard from "../../components/card/MainMenuCard";
import sloganImg1 from "../../../public/assets/frame1/top image section2.jpg";
import sloganImg2 from "../../../public/assets/frame1/bottom image section2.jpg";

import {
  SloganCardRightImg,
  SloganCardLeftImg,
} from "../../components/card/SloganCard";

// Penyimpanan variabel media dan title untuk button menu utama
const mainMenu = [
  {
    src: image1,
    titleButton: "Tentang Kami",
  },
  {
    src: image2,
    titleButton: "Produk",
  },
  {
    src: image3,
    titleButton: "Peluang Bisnis",
  },
];

// Penyimpanan slogan perusahaan
const slogan = [
  {
    title: "GAPAI IMPIAN HIDUP YANG SEHAT DAN SEJAHTERA",
    deskripsi: `Apa rahasia awet muda? Menjalani hidup setiap hari dengan optimisme dan keyakinan untuk melakukan apa yang Anda cintai sepanjang hidup Anda.\n
    Melalui ilmu pengetahuan kami yang inovatif, kami menyingkap cara-cara baru untuk membantu Anda terlihat dan merasa muda. Kami hadirkan penemuan-penemuan ini ke dalam kehidupan melalui produk-produk perawatan tubuh dan suplemen yang baik.`,
    src: sloganImg1,
  },
  {
    title: "RACIKAN DENGAN KOMBINASI SEMPURNA HASIL RISET LAB",
    deskripsi: `Memanfaatkan yang terbaik dari alam untuk memberikan hasil terbaik adalah misi pribadi kami. Kami menggabungkan bahan kandungan yang bermanfaat dengan ilmu pengetahuan dan teknologi yang inovatif. Hasilnya? Produk-produk kelas dunia 
    yang memberikan manfaat nyata. `,
    src: sloganImg2,
  },
];

const Beranda = () => {
  return (
    <div>
      {/* Section 1 : banner utama */}
      {/* Banner utama -> di setting dengan tinggi 633px dan lebar full */}
      <section>
        {/* Pembungkus utama */}
        <div className="relative h-screen">
          {/* Image untuk banner utama disini */}
          <Image
            src={mainBannerImg}
            alt="Banner"
            className="pointer-events-none h-screen object-cover"
          />

          {/* Tagline dalam banner utama diisi disini */}
          <div className="absolute inset-0 flex flex-col justify-center w-[559px] pl-[81px]">
            <p className="text-[48px] text-primary1 text-wrap italic font-semibold">
              HIDUP LEBIH SEHAT DAN SEJAHTERA
            </p>
            <div className="w-[320px] border-[2px] border-primary1 mt-[11px]"></div>
            <p className="text-[24px] text-white mt-[18px] text-wrap pr-20 font-medium">
              Mulailah hari anda dengan perawatan yang sehat dan alami
            </p>
            <button className="mt-[73px] text-[18px] bg-primary2 font-medium text-white w-fit px-8 py-3 rounded-[55px] transition duration-300 ease-in-out hover:bg-pink-600">
              SELENGKAPNYA
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 : pilihan menu utama */}
      <section>
        <div className="mt-[77px] flex px-[100px]">
          {mainMenu.map((menu, index) => {
            return (
              <MainMenuCard
                key={index}
                src={menu.src}
                titleButton={menu.titleButton}
              />
            );
          })}
        </div>
      </section>

      {/* Section 3 : slogan perusahaan */}
      <section>
        <div className="mt-[70px] px-[100px]">
          {slogan.map((slogan, index) => {
            if (index % 2 == 0) {
              return (
                <SloganCardRightImg
                  key={index}
                  src={slogan.src}
                  title={slogan.title}
                  deskripsi={slogan.deskripsi}
                  index={index}
                />
              );
            } else {
              return (
                <SloganCardLeftImg
                  key={index}
                  src={slogan.src}
                  title={slogan.title}
                  deskripsi={slogan.deskripsi}
                  index={index}
                />
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Beranda;

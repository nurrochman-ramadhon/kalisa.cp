import Image from "next/image";
import mainBannerImg from "../../../public/assets/frame1/portrait-beautiful-woman-with-clear-skin-posing-with-leaf-copy-space 1.jpg";

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
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="pointer-events-none"
          />

          {/* Tagline dalam banner utama diisi disini */}
          <div className="absolute inset-0 flex flex-col justify-center w-[559px] pl-[81px]">
            <p className="text-[48px] text-primary1 text-wrap italic">
              HIDUP LEBIH SEHAT DAN SEJAHTERA
            </p>
            <div className="w-[320px] border-[2px] border-primary1 mt-[11px]"></div>
            <p className="text-[24px] text-white mt-[18px] text-wrap pr-20">
              Mulailah hari anda dengan perawatan yang sehat dan alami
            </p>
            <button className="mt-[73px] text-[18px] bg-primary2 font-semibold text-white w-fit px-8 py-3 rounded-[55px] transition duration-300 ease-in-out hover:bg-pink-600">
              SELENGKAPNYA
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 : pilihan menu utama */}
      <section>
        <div className="h-[215px] w-[1080px] mt-[77px]">

        </div>
      </section>
    </div>
  );
};

export default Beranda;

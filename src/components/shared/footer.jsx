import kalisaLogo from "../../../public/assets/footer/Frame.png";
import fbLogo from "../../../public/assets/footer/Vector Facebook.png";
import igLogo from "../../../public/assets/footer/Vector instagram.png";
import twLogo from "../../../public/assets/footer/Vector twitter.png";
import youtubeLogo from "../../../public/assets/footer/Vector Youtube.png";
import phoneLogo from "../../../public/assets/footer/Vector phone.png";
import Image from "next/image";

const Footer = () => {
  return (
    // Pembungkus Utama
    <div className="lg:h-[323px] bg-primary1 pt-[47px] lg:px-[100px] flex text-white font-medium flex-col md:flex-row gap-y-4 px-6 md:justify-between">
      {/* FOOTER sisi Kiri */}
      {/* Berisi logo Kalisa dan keterangan copyright */}
      <div className="lg:w-[788px]">
        <div className="Kalisa-logo-footer text-white">
          <Image src={kalisaLogo} alt="Kalisa Logo" />
          <p className="leading-[22.96px] text-[14px] mt-[20px] lg:w-[593px]">
            © PT. Kalisa Sehat Sejahtera. Tidak ada produksi ulang secara
            keseluruhan atau sebagian tanpa izin tertulis. All Rights Reserved.
            Semua merek dagang dan perdagangan pakaian yang dipamerkan dalam
            situs ini, kecuali dinyatakan lain, adalah milik PT. Kalisa Sehat
            Sejahtera.
          </p>
          <p className="hidden md:block leading-[22.96px] text-[14px] mt-[33px]">
            © Copyright 2022 | PT. Kalisa Sehat Sejahtera
          </p>
        </div>
      </div>

      {/* FOOTER sisi Kanan */}
      {/* Berisi alamat sosmed - no telpon - alamat */}
      <div className="flex flex-col justify-center w-full">
        {/* Item 1 : sosmed milik Kalisa */}
        <div className="flex gap-[15px] items-center md:justify-end">
          <a href="">
            <Image Image className="w-[24px]" src={fbLogo} alt="fb" />
          </a>
          <a href="">
            <Image Image className="w-[24px]" src={igLogo} alt="ig" />
          </a>
          <a href="">
            <Image Image className="w-[24px]" src={twLogo} alt="tw" />
          </a>
          <a href="">
            <Image className="w-[24px]" src={youtubeLogo} alt="yt" />
          </a>
        </div>

        {/* Item 2 : Info */}
        <div className=" md:text-right mt-[12px] text-[14px]leading-[22.96px]">
          <p>TENTANG KAMI</p>
          <p>KEBIJAKAN PRIVASI</p>
          <p>SYARAT & KETENTUAN</p>
        </div>

        {/* Item 3 : no telpon */}
        <div className="flex gap-[7px] mt-4 md:mt-[32px] md:justify-end items-center text-[14px]">
          <Image className="w-[16px] h-[16px]" src={phoneLogo} alt="phone" />
          <p>026-5264-4190</p>
        </div>

        {/* Item 4 : alamat kantor */}
        <div className="md:text-right text-[14px] mt-[8px]">
          <p className="md:leading-[16.52px]">
            Jl. Raya Kalipucang No.232, Kalipucang, <br />
            Kec. Kalipucang, Kab. Pangandaran, <br />
            Jawa Barat 46397
          </p>
        </div>
        <p className="md:hidden leading-[22.96px] text-[14px] mt-[33px]">
          © Copyright 2022 | PT. Kalisa Sehat Sejahtera
        </p>
      </div>
    </div>
  );
};

export default Footer;

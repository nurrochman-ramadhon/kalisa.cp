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
    <div className="h-[323px] bg-primary1 pt-[47px] px-[100px] flex justify-between text-white">
      {/* FOOTER sisi Kiri */}
      {/* Berisi logo Kalisa dan keterangan copyright */}
      <div className="w-[788px]">
        <div className="Kalisa-logo-footer text-white">
          <Image src={kalisaLogo} alt="Kalisa Logo" />
          <p className=" text-[14px] mt-[20px] w-[593px]">
            © PT. Kalisa Sehat Sejahtera. Tidak ada produksi ulang secara
            keseluruhan atau sebagian tanpa izin tertulis. All Rights Reserved.
            Semua merek dagang dan perdagangan pakaian yang dipamerkan dalam
            situs ini, kecuali dinyatakan lain, adalah milik PT. Kalisa Sehat
            Sejahtera.
          </p>
          <p className=" text-[14px] mt-[33px]">© Copyright 2022 | PT. Kalisa Sehat Sejahtera</p>
        </div>
      </div>

      {/* FOOTER sisi Kanan */}
      {/* Berisi alamat sosmed - no telpon - alamat */}
      <div className="flex flex-col justify-center">
        {/* Item 1 : sosmed milik Kalisa */}
        <div className="flex gap-[15px] items-center justify-end">
          <a href=""><Image Image className="w-[24px]" src={fbLogo}/></a>
          <a href=""><Image Image className="w-[24px]" src={igLogo}/></a>
          <a href=""><Image Image className="w-[24px]" src={twLogo}/></a>
          <a href=""><Image className="w-[24px]" src={youtubeLogo}/></a>
        </div>
        
        {/* Item 2 : Info */}
        <div className=" text-right mt-[15.29px] text-[14px]">
          <p>TENTANG KAMI</p>
          <p>KEBIJAKAN PRIVASI</p>
          <p>SYARAT & KETENTUAN</p>
        </div>
        
        {/* Item 3 : no telpon */}
        <div className="flex gap-[7px] mt-[32px] justify-end items-center text-[14px]">
          <Image className="w-[16px] h-[16px]" src={phoneLogo}/>
          <p>026-5264-4190</p>
        </div>

        {/* Item 4 : alamat kantor */}
        <div className="text-right text-[14px] mt-[8px]">
          <p>Jl. Raya Kalipucang No.232, Kalipucang, <br/>Kec. Kalipucang, Kab. Pangandaran, <br/>Jawa Barat 46397</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

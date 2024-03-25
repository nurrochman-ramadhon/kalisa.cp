import kalisaLogo from "../../../public/assets/footer/Frame.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="h-[323px] bg-primary1 pt-[47px] px-[100px]">
      <div className="w-[593px]">
        <div className="Kalisa-logo-footer text-white">
          <Image src={kalisaLogo} alt="Kalisa Logo" />
          <p className=" text-[14px] mt-[20px]">
            © PT. Kalisa Sehat Sejahtera. Tidak ada produksi ulang secara
            keseluruhan atau sebagian tanpa izin tertulis. All Rights Reserved.
            Semua merek dagang dan perdagangan pakaian yang dipamerkan dalam
            situs ini, kecuali dinyatakan lain, adalah milik PT. Kalisa Sehat
            Sejahtera.
          </p>
          <p className=" text-[14px] mt-[33px]">© Copyright 2022 | PT. Kalisa Sehat Sejahtera</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Frame.png";
import Icon from "../../../public/assets/bx_user.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const menuItems = [
    { text: "Beranda", path: "/beranda" },
    { text: "Tentang Kami", path: "/about" },
    { text: "Produk", path: "/product" },
    { text: "Peluang Bisnis", path: "/bisnis" },
  ];

  const pathName = usePathname();

  return (
    <nav className="h-[89px] w-full bg-primary1 flex items-center">
      <div className="flex justify-between w-11/12 mx-auto">
        <Image src={Logo} className="w-[141px] h-[41px]" />
        <ul className="flex gap-4 items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="font-medium text-primary3">
              <Link href={item.path}>
                <h1
                  className={`${
                    pathName.includes(item.path)
                      ? "border-b-2 border-primary3 font-bold animate-fade-in"
                      : "hover:text-white text"
                  }`}
                >
                  {item.text}
                </h1>
              </Link>
            </li>
          ))}
          <button className="text-primary1 font-medium bg-primary3 w-[92px] h-[34px] text-md rounded-lg flex items-center justify-center space-x-2 drop-shadow-2xl hover:border-2 border-black">
            <Image src={Icon} width={24} height={24} />
            <span>Login</span>
          </button>
        </ul>
      </div>
    </nav>
  );



export default Navbar;

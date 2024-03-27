"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Frame.png";
import Icon from "../../../public/assets/bx_user.png";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { text: "Beranda", path: "/" },
    { text: "Tentang Kami", path: "/about" },
    { text: "Produk", path: "/product" },
    { text: "Peluang Bisnis", path: "/bisnis" },
  ];

  const pathName = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const onHandleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled
          ? "lg:flex fixed bg-primary1 bg-opacity-90"
          : "  bg-primary1 lg:bg-primary1  block"
      }`}
    >
      <div className="h-[89px] flex items-center justify-between w-11/12 mx-auto">
        <Image src={Logo} className="w-[141px] h-[41px]" alt="logo" />
        <div className="flex">
          <button className="lg:hidden text-primary1 mx-4 font-medium bg-primary3 w-[92px] h-[34px] text-md rounded-lg flex items-center justify-center space-x-2 drop-shadow-2xl hover:bg-white hover:text-black transition-colors duration-300">
            <Image src={Icon} width={24} height={24} alt="login" />
            <span>Login</span>
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <GiHamburgerMenu
              size={24}
              className="text-white cursor-pointer lg:hidden"
            />
          </button>
        </div>
        {isOpen && (
          <Sidebar onList={onHandleSidebar} onClick={() => setIsOpen(false)} />
        )}
        <ul className="hidden gap-4 items-center lg:flex ">
          {menuItems.map((item, index) => (
            <li key={index} className="font-medium text-primary3">
              <Link href={item.path}>
                <h1
                  className={`${
                    pathName === item.path
                      ? "border-b-2 border-primary3 font-bold animate-fade-in"
                      : "hover:text-white text"
                  }`}
                >
                  {item.text}
                </h1>
              </Link>
            </li>
          ))}
          <button className="text-primary1 mx-4 font-medium bg-primary3 w-[92px] h-[34px] text-md rounded-lg flex items-center justify-center space-x-2 drop-shadow-2xl hover:bg-white hover:text-black transition-colors duration-300">
            <Image src={Icon} width={24} height={24} alt="icon" />
            <span>Login</span>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

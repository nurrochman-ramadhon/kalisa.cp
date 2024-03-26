"use client";

import React from "react";
import Logo from "../../../public/assets/Frame.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

const menuItems = [
  { text: "Beranda", path: "/beranda" },
  { text: "Tentang Kami", path: "/about" },
  { text: "Produk", path: "/product" },
  { text: "Peluang Bisnis", path: "/bisnis" },
];

const Sidebar = (props) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 lg:hidden"></div>
      <div className="fixed top-0 right-0 h-full w-2/4 bg-primary1 p-4 overflow-y-auto lg:hidden z-50">
        <h2 className="text-lg font-bold mb-4 flex justify-between">
          <Image src={Logo} />
          <IoClose
            size={36}
            onClick={props.onClick}
            className="text-white cursor-pointer"
          />
        </h2>
        <ul className=" gap-4 items-center lg:flex ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="font-medium text-primary3 w-full border-b border-white pt-4 hover:border-black hover:text-black"
              onClick={props.onList}
            >
              <Link href={item.path}>
                <h1>{item.text}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

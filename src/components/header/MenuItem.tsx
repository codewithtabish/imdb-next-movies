import Link from "next/link";
import React, { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
interface MenuItemProps {
  title: string;
  address: string;
  Icon: any;
  //    React.ReactElement<typeof AiFillHome | typeof BsFillInfoCircleFill>;
}

const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
  return (
    <Link href={address} className="hover:text-amber-500 mx-2">
      <Icon className="text-2xl sm:hidden" />
      <p className="text-sm sm:inline hidden uppercase font-semibold">
        {title}
      </p>
    </Link>
  );
};

export default MenuItem;

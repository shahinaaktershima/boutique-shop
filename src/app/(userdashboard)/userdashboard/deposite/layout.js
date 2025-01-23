import Link from "next/link";
import React from "react";
import { FaPaypal } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div>
      <div className=" w-full  bg-[#353A4D]">
       
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;

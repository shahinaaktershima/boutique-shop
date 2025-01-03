import Link from "next/link";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer, FaPaypal } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div>
      <div className=" w-full  bg-[#353A4D]">
        <ul className="menu p-4 flex flex-row">
          <li>
            <Link href={"/userdashboard/deposite"}>
              <FaPaypal></FaPaypal> Deposit
            </Link>
          </li>
          <li>
            <Link href={"/userdashboard/withdraw"}>
              <BiMoneyWithdraw></BiMoneyWithdraw> Withdraw
            </Link>
          </li>
         
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;

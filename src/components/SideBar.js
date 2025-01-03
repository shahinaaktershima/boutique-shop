"use client"
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaHome, FaTradeFederation,FaChartLine  } from "react-icons/fa";
import { FcNeutralTrading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import {
  FaAccusoft,
  FaPlaystation,
  FaUsers,
  FaVoicemail,
} from "react-icons/fa6";

const SideBar = ({userInfo}) => {
  return (
    <div className="drawer lg:drawer-open flex flex-col">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-end px-3 py-2 bg-[#11172C] justify-center overflow-y-auto">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="px-1 bg-slate-400 text-white rounded cursor-pointer py-1 lg:hidden"
        >
          <IoMenuSharp size={23} />
        </label>
      </div>
      <div className="drawer-side flex-1">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu py-2 w-64 z-50 text-white bg-[#11172c] text-lg flex flex-col justify-between h-screen">
       <div>
       {userInfo.role === "admin" ? (
            <div className="flex flex-col justify-between min-h-[calc(100vh-34px)]">
             <div className="space-y-1">
             <li>
                <Link href={"/userdashboard/analytics"}>
                  <FaChartLine ></FaChartLine > Analytics
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/UsersCollect"}>
                  <FaUsers></FaUsers> Allusers
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/alltrade"}>
                  {" "}
                  <FaMoneyBill1Wave  /> All Trade
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/alltransaction"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> All Transaction
                </Link>
              </li>
             </div>
              <div>
              <li>
                <Link href={"/"}>
                  <FaHome></FaHome> Home
                </Link>
              </li>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <li>
                <Link href={"/"}>
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard"}>
                  <MdDashboard></MdDashboard> Dashboard
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/account"}>
                  {" "}
                  <FaAccusoft></FaAccusoft>Update Account{" "}
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/deposite"}>
                  {" "}
                  <FaVoicemail></FaVoicemail> Transection with anyOperator
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/SocialTrading"}>
                  {" "}
                  <FcNeutralTrading /> Social Trading
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/tradinghistory"}>
                  {" "}
                  <FaMoneyBill1Wave  /> Trading History
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/tournaments"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Tournaments
                </Link>
              </li>
              <li>
                <Link href={"/userdashboard/paymenthistory"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Historty
                </Link>
              </li>

              <li>
                <Link href={"/userdashboard/profile"}>
                  {" "}
                  <FaPlaystation></FaPlaystation> Profile
                </Link>
              </li>
            </div>
          )}
       </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

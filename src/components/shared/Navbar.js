"use client";



import { AuthContext } from "@/Provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import UseAdmin from "../Hooks/UseAdmin";


const Navbar = () => {
  const {logout} = useContext(AuthContext)
  const [userInfo] = UseAdmin();
  // console.log(userInfo);
  const handleLogout = () => {
    logout()
    .then(()=>{
      toast.success("Sign Out sucessfully");
    })
  }
  const navItems = (
    <>
      <Link
        className="  mx-3 font-bold hover:underline "
        href="/"
      >
        Home
      </Link>

      <Link
        className=" mx-3 font-bold hover:underline"
        href="/about"
      >
        About
      </Link>
      <Link
        className=" mx-3 font-bold hover:underline"
        href="/blogs"
      >
        Blog
      </Link>

      <Link
        className=" mx-3 font-bold hover:underline"
        href="/contact"
      >
        Contact
      </Link>
     
      
    </>
  );

  return (
    <div className="bg-gray-900 ">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-2 mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52"
            >
             {navItems}
            </ul>
          </div>
          <div className="flex items-center rounded-full">
          <Image  className="rounded-full md:w-[50px] md:h-[50px] w-[30px] h-[30px]" src="https://i.postimg.cc/SxtcKzHq/image.png" alt="logo" width={50} height={50}/>
          <p className="btn btn-ghost md:text-xl text-md "> Boutique shop </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">

        {userInfo?<div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn m-1">Profile</div>
    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center">
      <li>{userInfo?.name}</li>
      <li><Link href={userInfo?.role === "admin" ? '/userdashboard/analytics' : '/userdashboard' } >Dashboard</Link></li>
      <li><button onClick={handleLogout}>LogOut</button></li>
    </ul>
  </div>:  <li><Link  href={'/signin'} >Join us</Link></li>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

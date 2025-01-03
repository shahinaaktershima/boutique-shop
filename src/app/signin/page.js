"use client"

import Link from 'next/link';
import banner from '@/assets/5035121.jpg'
import Image from 'next/image';
import { useContext } from 'react';
import { AuthContext } from '@/Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';




// change
const SinginPage = () => {
  const {signin} = useContext(AuthContext);
  
  const router = useRouter()
  
  const handleSignin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signin(email,password)
    .then(()=>{
      toast.success("Sign in sucessfully");
      router.push('/')
    })
    .catch(err=>{
      toast.error(err.message)
    })
  }

    return (
        <div className="container mx-auto text-white px-5 my-7 min-h-[calc(100vh-56px)] flex items-center justify-center lg:flex-row flex-col gap-8">
        <div className="">
          <h1 className="text-5xl font-semibold ">
            Hey there! <br /> Welcome back
          </h1>
          <Image src={banner} alt="banner" width={400} height={400} />
        </div>
        <div style={{boxShadow: "rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"}}  className="flex-1 bg-[#081D17] max-w-sm px-7 py-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-5">Sign In</h1>
          <form onSubmit={handleSignin}>
            <label className="font-bold " htmlFor="email">
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              required
              name="email"
              className="py-2 px-3 mb-3 mt-1 w-full rounded-sm border-1 bg-[#1B2D29] border-gray-500"
              placeholder="Enter email here..."
            />
            <label className="font-bold " htmlFor="email">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              required
              className="py-2 px-3 mb-3 mt-1 w-full rounded-sm border-1 bg-[#1B2D29] border-gray-500"
              placeholder="Enter Password here..."
            />
            <input
              type="submit"
              value="Sign In"
              className="w-full py-3 rounded bg-[#00d068] font-medium mt-5 text-black cursor-pointer text-lg"
            />
          </form>
          
          
          <p className="font-bold mt-1">
            Dont have any Account?
            <Link href="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SinginPage;
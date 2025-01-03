"use client"

import Link from 'next/link';
import {FcGoogle} from 'react-icons/fc'
import banner from '@/assets/9520.jpg'
import Image from 'next/image';
import { useContext } from 'react';
import { AuthContext } from '@/Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import auth from '@/Provider/firebase.config';
import UseAxios from '@/components/Hooks/UseAxios';



const SingUpPage = () => {
  const {signup} = useContext(AuthContext);
  const router = useRouter()
  const provider = new GoogleAuthProvider();
 const axios=UseAxios();
  const handleSignup = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = {
      name:name,
      email,email,
      role:'user',
      balance: 0,
      withdraw: 0,
      profit:0
    }
    signup(email,password)
    .then(()=>{
        toast.success("Sign Up sucessfully");
        axios.post('/user',userInfo)
        .then(()=>{
          router.push('/')
        })
     
    })
    .catch(err=>{
      toast.error(err.message)
    })
  }
  const handleGoogle=()=>{
    signInWithPopup(auth,provider)
   .then(result=>{console.log(result.user);
    const userInfo={
      email:result.user?.email,
      name:result.user?.displayName,
      role:'user',
      balance: 0,
      withdraw: 0
  }
  toast.success("Sign Up sucessfully");
    axios.post('/user',userInfo)
    .then(()=>{
      router.push('/')
    }) 
   })
   .catch(err=>console.log(err.messages))
 }
    return (
        <div className="container mx-auto min-h-[calc(100vh-40px)] text-white px-5 my-5 flex items-center justify-center lg:flex-row flex-col gap-8">
        <div className="">
          <h1 className="text-5xl font-semibold ">
            Trading With <br />TRADESWIFT
          </h1>
          <Image src={banner} alt="banner" width={350} height={350} />
        </div>
        <div style={{boxShadow: "rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"}}  className="flex-1 bg-[#081D17] max-w-sm px-7 py-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-5">Sign Up Now!</h1>
          <form onSubmit={handleSignup}>
            <label className="font-bold " htmlFor="email">
              Your Name
            </label>{" "}
            <br />
            <input
              type="text"
              required
              name="name"
              className="py-2 px-3 mb-3 mt-1 w-full rounded-sm border-1 bg-[#1B2D29] border-gray-500"
              placeholder="Enter Your Name"
            />
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
          <div className="divider">OR</div>
          <button onClick={handleGoogle} className='w-full bg-[f5f7fc] py-2.5 rounded-md border-2 flex items-center justify-center gap-2 font-medium border-black'><span className='text-2xl'><FcGoogle/></span><span>Continue with Google</span></button>
          <p className="font-bold mt-1">
            Already have an Account?
            <Link href="/signin" className="text-blue-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SingUpPage;
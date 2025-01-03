"use client"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import barnner from '@/assets/banner.png'
import UseAdmin from "@/components/Hooks/UseAdmin";
import Link from "next/link";


const Banner = () => {
    const [userInfo]=UseAdmin();
    return (
       <>
         <div className=" ">
            <div className="container mx-auto py-4 md:py-14  flex items-center justify-between gap-8  flex-col-reverse md:flex-row">
                <div className="space-y-3">
                    <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold">Shoping <br /> With <span className="text-green-600">boutique shop</span></h1>
                    <p className="max-w-lg text-sm md:text-base space-y-2">Anyone can help to save their money and do their life easier through online. We’re passionate about craftsmanship and creativity, ensuring each item is both special and timeless.</p>
               {userInfo? <Link href={'/userdashboard'}><button className="bg-green-600 my-2 px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                   <span>Get Started</span>
                   
                    <span><FaArrowRight/></span>
                </button></Link>:<Link href={'/signin'}><button className="bg-green-600 px-5 py-3 rounded-md font-medium text-black flex items-center gap-1">
                   <span>Get Started</span>
                   
                    <span><FaArrowRight/></span>
                </button></Link>}
                </div>
                <div className="">
                    <Image src={'https://i.postimg.cc/SxtcKzHq/image.png'} width={500} height={500} alt="banner" />
                </div>
            </div>
        </div>
        
       </>
    );
};

export default Banner;
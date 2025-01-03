"use client";
import Image from "next/image";
import Link from "next/link";
import PaiChart from "@/components/Chart/PaiChart";



import Transection from "@/components/Deposit/Transection";

const page = () => {
  return (
    <div className="text-white flex flex-col">
      <div className="flex gap-y-4 space-x-9 mt-6 flex-col lg:flex-col">
        <div className="flex-1">
        <Transection></Transection>
        </div>

        <div className="flex-1 lg:my-8">
          <h2 className="text-center text-2xl font-bold my-4">Deposit with mobile banking</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
           <Link href={'/userdashboard/deposite'}> <Image className=" rounded-lg h-[200px]" src="https://i.postimg.cc/qvzTrmNJ/image.png" height={100} width={300} alt="image description"></Image> </Link>
            <Link href={'/userdashboard/deposite'}> <Image className=" rounded-lg h-[200px]" src="https://i.postimg.cc/ry37MTtK/image.png" height={100} width={300} alt="image description"></Image> </Link>
            <Link href={'/userdashboard/deposite'}> <Image className=" rounded-lg h-[200px]" src="https://i.postimg.cc/PrnKS5wz/image.png" height={100} width={300} alt="image description"></Image> </Link>
            <Link href={'/userdashboard/deposite'}> <Image className=" rounded-lg h-[200px]" src="https://i.postimg.cc/X7gKxc34/image.png" height={100} width={300} alt="image description"></Image> </Link>
           </div>
           </div>

        <div className="flex-1">
          <PaiChart/>

        </div>
      </div>
    </div>
  );
};

export default page;

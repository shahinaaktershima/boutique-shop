"use client"


import Deposit from "@/components/Transection/Deposit";
import FAQ from "@/components/Transection/FAQ";
import SideDiv from "@/components/Transection/SideDiv";





const deposit = () => {
   
 
    return (
      <div className="flex flex-col gap-8 lg:flex-row">
        <SideDiv></SideDiv>
        <Deposit></Deposit>
        <div className="lg:max-w-[400px] w-full my-10">
        <FAQ></FAQ>
        </div>
       
        </div>
    );
};

export default deposit;
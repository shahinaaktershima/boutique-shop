"use client"


import Deposit from "@/components/Transection/Deposit";

import SideDiv from "@/components/Transection/SideDiv";





const deposit = () => {
   
 
    return (
      <div className="flex flex-col gap-8 lg:flex-row">
        <SideDiv></SideDiv>
        <Deposit></Deposit>
       
        </div>
    );
};

export default deposit;
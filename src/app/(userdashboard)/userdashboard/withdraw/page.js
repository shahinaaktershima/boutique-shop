"use client"
import FAQWith from '@/components/Transection/FAQWith';
import SideDiv from '@/components/Transection/SideDiv';
import Withdraw from '@/components/Transection/Withdraw';
import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col gap-8 lg:flex-row">
        <SideDiv></SideDiv>
       <Withdraw></Withdraw>
       <FAQWith></FAQWith>
        </div>
    );
};

export default page;
import React from 'react';
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Footertop = () => {
    return (
        <div className='py-10 '>
           <div className='container mx-auto flex lg:flex-row   flex-col gap-20'>
            <div className='flex'>
                <div className='px-10'>
                    <MdPeopleAlt className='text-2xl'></MdPeopleAlt>
                    <h2 className='font-bold my-2'>8 000 000+</h2>
                    <p>Registered users</p>
                </div>
                <div className='pl-10 pr-16'>
                    <MdOutlineMarkEmailUnread className='text-2xl'></MdOutlineMarkEmailUnread>
                    <h2 className='font-bold my-2'>15 000+</h2>
                    <p>Active buyers daily</p>
                </div>
            </div>
            <div className='flex'>
                <div className='pl-10 pr-16'>
                    <GiNetworkBars className='text-2xl'></GiNetworkBars>
                    <h2 className='font-bold my-2'>$30 000 000</h2>
                    <p>Monthly shopping volume</p>
                </div>
                <div className='pr-10 pl-16'>
                    <FaArrowUpRightFromSquare className='text-2xl'></FaArrowUpRightFromSquare>
                    
                    <h2 className='font-bold my-2'>$1 100 000</h2>
                    <p>Shopping each month</p>
                </div>
            </div>
            
            
            </div> 
        </div>
    );
};

export default Footertop;
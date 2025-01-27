import React, { useState } from 'react';
import {  FaPlus } from 'react-icons/fa6';
import DepositCard from './DepositCard';

import UseAdmin from '../Hooks/UseAdmin';

const Transection = () => {
    let [isOpen, setIsOpen] = useState(false);
  
    const [userInfo] = UseAdmin();
    function openModal() {
      setIsOpen(true);
    }
    return (
        <div className='text-[#dfe2ec]'>
           <div className='flex gap-3 mb-4'>
           <button
          onClick={openModal}
          className="bg-[#0FAF59] flex items-center gap-1 text-[#dfe2ec] px-5 py-2 rounded-sm font-medium"
        >
          <FaPlus />
          Deposit by cards
        </button>
        {/* sgj */}
       
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="px-5 py-4 text-[#dfe2ec] bg-blue-600 rounded-md">
              <h1 className="text-xl font-semibold">Total Balance </h1>
              <h2 className="text-3xl font-bold">$ {userInfo.balance}</h2>

            </div>
            <div className="px-5 py-4 text-[#dfe2ec] bg-blue-600 rounded-md">
              <h1 className="text-xl font-semibold">Total Profit </h1>
              <h2 className="text-3xl font-bold">$ {userInfo?.profit || 0}</h2>
            </div>
           
          </div> 
          {isOpen === true && <DepositCard setIsOpen={setIsOpen} isOpen={isOpen} />}
        </div>
    );
};

export default Transection;
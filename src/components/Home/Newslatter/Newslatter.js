import Image from 'next/image';
import React from 'react';
import news from '@/assets/newslatter.png'

const Newslatter = () => {
    return (
        <div className='bg-[#0A1F19] text-white py-20 px-4'>
            <div className='bg-[#00D094] py-8 px-3 md:px-6 max-w-4xl rounded-2xl items-center mx-auto md:flex flex-col md:flex-row gap-5'>
                <Image src={news} alt='newslatter' width={250} height={500} />
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-5xl font-bold'><span className='text-blue-700'>Subscribe</span> Our News</h1>
                    <p className='text-black max-w-lg'>Hey! Are you tired of missing out on our updates? Subscribe to our news now and stay in the loop!</p>
                    <div className='flex gap-1 md:gap-3'>
                        <input type="text" placeholder='Email Address' className='bg-white rounded-md md:py-3 md:px-5 py-2 px-3 w-[180px]  md:w-[300px]' />
                        <button className='text-white bg-blue-700 px-4 md:px-5 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;
import React from 'react';

const Getstarted = () => {
    return (
        <div >
            <div className='container mx-auto   py-10'>
            <h2 className='text-3xl font-bold text-center  py-10'>It is simple to get started</h2>
             <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div>
                <div className="divider text-5xl font-bold pb-3 ">1</div>
                <div className=' pr-16 text-start pl-16 py-5'>
                    <h2 className='text-2xl font-bold'>Sign up</h2>
                    <p>Create an account for free using your email address</p>
                </div>
                </div>
                <div>
                <div className="divider text-5xl font-bold pb-3 ">2</div>
                <div className=' pr-10 text-start pl-16 py-5'>
                    <h2 className='text-2xl font-bold'>Explore the platform</h2>
                    <p>See what it’s like to shopping.</p>
                </div>
                </div>
                
                <div>
                <div className="divider text-5xl font-bold pb-3 ">3</div>
                
                <div className=' pr-5 text-start pl-16 py-5'>
                    <h2 className='text-2xl font-bold'>Start Shopping</h2>
                    <p>Put your shopping approach to good use.</p>
                </div>
                </div>
             </div>
            
        </div>
        </div>
    );
};

export default Getstarted;
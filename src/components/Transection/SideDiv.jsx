// import Image from 'next/image';
import Image from 'next/image';
import React from 'react';

const SideDiv = () => {
    return (
        <div className=' lg:my-20 max-w-[400px] space-y-3 '>
        {/* <Image src={'https://i.postimg.cc/T3dgkDHv/image.png'} height={100} width={100} alt='its an bank image'></Image> */}
        <Image className=' rounded-lg' src="https://i.postimg.cc/T3dgkDHv/image.png" alt="Description of the image"  width={200} height={90}/>
           <h2>Minimum deposit amount:10$</h2> 
           <h2>Minimum withdrawal amount:10$</h2> 
           
        </div>
    );
};

export default SideDiv;
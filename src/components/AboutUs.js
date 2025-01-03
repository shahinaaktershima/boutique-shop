"use client"

import Image from "next/image";
import Link from "next/link";




const AboutUs = () => {


    






    return (
   

<>

<div>

<div className="hero max-h-[500px]  py-10">

  <div className="hero-content flex-col lg:flex-row-reverse">
  
     <Image src="https://i.postimg.cc/9Xt8QJbh/image.png" alt="icon" width={400} height={350}/>
    <div>

    <h2 className="text-4xl font-bold text-center  text-green-600  mt-5 mb-5">Introduction to <span className="text-green-600 font-bold "> Boutique shop </span> </h2>
   <div className="">
   <p className="text-lg text-center "> Its an online based shopping platform.
   At Our boutique shop, we curate exclusive, high-quality products that reflect individuality and style. Our handpicked collections offer unique, limited-edition pieces you won’t find in mainstream stores. We’re passionate about craftsmanship and creativity, ensuring each item is both special and timeless. Our goal is to bring you products that resonate with your personal taste while delivering an exceptional shopping experience. Thank you for choosing our shop to be part of your style journey!
    </p>
   </div>
     
    </div>
  </div>
</div>
</div>
{/* MISSION AND VISSION */}
<div className="card mt-10  lg:card-side bg-base-100  shadow-xl">
  
   <Image src="https://i.postimg.cc/CM9Yg9Fs/image.png" alt="icon" width={450} height={350}/>
  <div className="card-body">

  <h2 className="text-3xl text-green-600  font-bold text-center mb-4">Mission and Vision</h2>
  <p className="text-lg  font-serif text-center mb-6">
      Our mission at boutique shop is to democratize access to financial markets and empower individuals worldwide to achieve their financial goals through selling by our sites. We envision a future where anyone, regardless of their background or experience, can participate in the global economy and build wealth with confidence.
    </p>
    <p className="text-lg  font-sans text-center mb-6">
      We strive to be the preferred choice for buyers seeking reliability, efficiency, and profitability in their shopping journey.
    </p>
    
  </div>
</div>


 {/* Meet Our Team */}
  


 <section class="py-12 mt-10 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 class="text-3xl text-center  font-extrabold text-green-500 mb-4">Meet Our Team</h2>
            <div class="grid grid-cols-1  md:grid-cols-3 gap-8">
               
               <div class="flex flex-col items-center rounded-lg shadow-md w-[200px] h-[300px]">


                                       <Image src="https://i.postimg.cc/g2qTjGz9/Screenshot-2024-11-30-124456.png" alt="icon" width={200} height={300}/>
                   <h3 class="text-xl font-bold mt-3 "> Shahina Akter Shima </h3>
                   <p>15052204</p>
              
               </div>
               
               <div class="flex flex-col items-center rounded-lg shadow-md w-[200px] h-[300px]">
                   
                   <Image src="" alt="icon" width={200} height={50}/>
                   <h3 class="text-xl font-bold mt-3 ">Umay pru marma </h3>
                   <p>ID:15062202</p>
                    
                </div>
              
                <div class="flex flex-col items-center rounded-lg shadow-md w-[200px] h-[300px]">
               
                     <Image src="https://i.postimg.cc/0jbC8fbH/Screenshot-2024-11-30-124218.png" alt="icon" width={200} height={300}/>
                   <h3 class="text-xl font-bold mt-3 ">Saimon jannat </h3>
                  
                   <p>ID:15042102</p>
               </div>


              
            </div>
        </div>
     </section>

  {/* CORE VALUES */}


<div className="card ">
 
  <div className="card-body">
  <h2 className="text-3xl text-green-600  font-bold text-center mb-4">Core Values!!!</h2>
  <ul className=" text-xl pl-6">
      <li className="text-lg mb-4">Transparency: We believe in openness and honesty in all our interactions and operations.</li>
      <li className="text-lg mb-4">Security: We prioritize the protection of our users funds and personal information through advanced security measures.</li>
      <li className="text-lg mb-4">Innovation: We are committed to continuous innovation and improvement to enhance the shopping experience for our users.</li>
      <li className="text-lg mb-4">Customer Satisfaction: We strive to exceed our customers expectations and deliver exceptional service at every touchpoint.</li>
    </ul>
   
  </div>
</div>

 


{/* CLIENT SUPPORT */}

     <section class="py-12 mt-5  ">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-5 mb-5 items-center flex-col"> 
             <h2 class="text-3xl text-green-600 font-extrabold mb-4">Client Support</h2>

 <Image src="https://i.postimg.cc/pTMh9QCN/image.png" alt="icon" width={500} height={400} />
            </div>

             <p class="text-lg text-center  mb-6">We re here to help you with any questions or concerns you may have. Contact our support team for assistance.</p>

           
           <div class="flex text-3xl items-center justify-center">
               <Link href="/contact">  <button class=" bg-green-600 hover:bg-blue-700  font-bold py-2 px-4 rounded-full shadow-md">Contact Us</button> </Link>
            </div>
        </div>
    </section>

 {/* Faq section */}

    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
         </div>
    </section>

    <section class="py-12">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center  gap-5">
          <h2 class="text-3xl font-extrabold text-teal-500 mb-4">Risk Warning</h2>

 <Image src="https://i.ibb.co/wLcQ13t/warning-4201973.png" alt='icon' width={50} height={50} /> 
           </div>
             <div class=" rounded-lg w-[200px]p-6">
                 <p class="">The Financial Products offered by the company include Contracts for Difference  and other complex financial products. online shopping carries a high level of risk since leverage can work both to your advantage and disadvantage.You should never invest money that you cannot afford to lose. Before shopping in the complex financial products offered, please ensure to understand the risks involved.</p>
            </div>
        </div>
     </section>


</>


    );
};

export default AboutUs;
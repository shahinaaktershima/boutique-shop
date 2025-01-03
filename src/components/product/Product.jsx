import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Product = () => {
     const [product,setProduct]=useState([])
      useEffect(()=>{
          fetch('https://boutique-server.vercel.app/product')
          .then(res=>res.json())
          .then(data=>setProduct(data))
      },[])
      const Child=product.filter(item=>item.category==='child')
      const Old=product.filter(item=>item.category==='old')
      const Middle=product.filter(item=>item.category==='middle')
      const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.text.value;
        if(name==='child'){
            setProduct(Child);
        }
        if(name==='old'){
            setProduct(Old);
        }
        if(name==='middle'){
            setProduct(Middle)
        }
           
    }
    return (
       
             <div className=" gap-y-4 space-x-9 mt-6 grid grid-cols-1 md:grid-flow-row">
          <div className="flex items-center">
          <form className="flex my-2" onSubmit={handleSubmit}>
      <input name="text" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button  className="btn btn-primary -ml-4">Search by category</button>
      </form>

          </div>
          <div className="grid grid-cols-3 gap-5">
            {
                product.map(products=><div key={products._id} className="card card-compact h-[450px] bg-base-100 shadow-xl">
                <figure>
                  <Image src={products.image} alt="Shoes" height={350} width={500}></Image>
                 </figure>
                <div className="card-body">
                  <h2 className="card-title">Title:{products.title}</h2>
                  <p className="font-bold">Category: {products.category}</p>
                  <p className="font-bold">Price: {products.price} Taka</p>
                  <p>Description:{products.description.slice(0,50)}</p>

                  <div className="card-actions justify-end">
                    
                    <Link href={'/userdashboard/deposite'} ><button className="btn btn-primary">Buy now</button></Link>
                  </div>
                </div>
              </div>)
            }
        </div>
        
        </div>
    );
};

export default Product;
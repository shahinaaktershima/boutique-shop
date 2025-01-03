import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import UseAxios from '../Hooks/UseAxios';

const ManageProducts = () => {
    const [allProduct,setAll]=useState([]);
    
    const axios=UseAxios();
    useEffect(()=>{
        axios.get('/product')
        .then(res=>setAll(res.data));
    },[])
   

    const handleDeleteItems=item=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
             axios.delete(`/product/${item._id}`)
             .then(res=>{
              console.log(res);
              if(res.data.deletedCount>0){
               
               Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              }
             })
            }
          });
        
        }
    return (
        <div>
        <div className="flex justify-evenly my-8">
         <h2 className="text-4xl font-bold text-orange-400">All Items</h2>
         <h2 className="text-4xl font-bold text-orange-400">Total Meals:{allProduct.length}</h2>
        </div>
        <div className="overflow-x-auto w-full mx-auto my-10">
<table className="table overflow-x-auto">
 {/* head */}
 <thead>
   <tr >
     <th>Serial</th>
     <th>Image</th>
     <th>Type</th>
     <th>price</th>
     <th>description</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
   {/* row 1 */}
   {
     allProduct.map((item,index)=><tr key={item._id}>
         <td>{index+1}</td>
         <td>
            <Image src={item.image} alt="" height={30} width={30}></Image>
          </td>
         <td className="font-bold">{item.title}</td>
         <td>{item.price}</td>
         <td>{item.description}</td>
         <td> <button  onClick={()=>handleDeleteItems(item)} className="btn bg-orange-400 text-white text-xl flex items-center  btn-ghost btn-xs">
       <MdDelete></MdDelete>
           </button></td>
       </tr>)
   }
 
       
   
 </tbody>
</table>
</div>
     </div>
    );
};

export default ManageProducts;
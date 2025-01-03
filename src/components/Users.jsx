"use client"
import React, { useEffect, useState } from 'react';
import UseAxios from './Hooks/UseAxios';
// import { useQuery } from '@tanstack/react-query';
import { FaDeleteLeft, FaUser } from 'react-icons/fa6';
import Swal from 'sweetalert2';


const Users = () => {
  
    const axiosSecure=UseAxios();
    const [users,setUsers]=useState([])
    useEffect(()=>{
      fetch('https://boutique-server.vercel.app/user')
      .then(res=>res.json())
      .then(data=>setUsers(data))
    },[])
    const handleDeleteUser=user=>{
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
            
           axiosSecure.delete(`/user/${user._id}`)
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
  const handleMakeAdmin=user=>{
      axiosSecure.patch(`/user/admin/${user._id}`)
      .then(res=>{
          console.log(res.data)
          if(res.data.modifiedCount>0){
              
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an seller now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
     
     
  }
    return (
        <div>
        <div className="flex justify-evenly my-8">
         <h2 className="text-4xl font-bold">All users</h2>
         <h2 className="text-4xl font-bold">Total users:{users.length}</h2>
        </div>
        <div className="w-[400px] md:w-full">
<table className="table w-full">
 {/* head */}
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>email</th>
     <th>Role</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
   {/* row 1 */}
   {
     users.map((user,index)=><tr key={user._id}>
         <th>{index+1}</th>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>
        {/* {user.role==='admin'?'Admin': */}
        
        {user.role==='admin'?'Seller': ''}
        {user.role==='user'?<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-xs  bg-orange-400 text-white text-xl flex items-center">
       <FaUser></FaUser>
           </button>:''}
        {user.role==='Superadmin'?'Superadmin':''}

         </td>
         <td> <button  onClick={()=>handleDeleteUser(user)} className="btn bg-base-300 text-white md:text-xl flex items-center  btn-ghost btn-xs">
       <FaDeleteLeft></FaDeleteLeft>
           </button></td>
       </tr>)
   }
 </tbody>
</table>
</div>
     </div>
    );
};

export default Users;
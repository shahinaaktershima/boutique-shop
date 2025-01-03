"use client"

import { useForm } from "react-hook-form";


const Transection = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
      fetch('http://localhost:5000/deposit',{
        
        method:"POST",
        headers:{
          'content-type':'application/json'},
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      // .then( response=>response.json())
      .then(result=>{
        console.log(result)
        window.location.replace(result.url)
      })
      
      }
        
 
    return (
       <div className="max-w-[600px] mx-auto my-10">
       
         <form className="flex flex-col text-white" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label className="font-bold " htmlFor="email">
            Your Email
            </label>
      <input type="email" className="input input-bordered" {...register("email", { required: true })} />
      <label className="font-bold " htmlFor="text">
              Your Name
            </label>
      <input type="text" className="input input-bordered" defaultValue="" {...register("name")} />
      <label className="font-bold " htmlFor="amount">
              Amount
            </label>
      <input type="number" className="input input-bordered" defaultValue="0" {...register("number")} required/>

      {/* include validation with required or other standard HTML validation rules */}
     
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input className="input input-bordered text-white" type="submit" />
    </form>
       </div>
    );
};

export default Transection;
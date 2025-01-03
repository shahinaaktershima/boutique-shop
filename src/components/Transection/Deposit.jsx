import React from "react";
import { useForm } from "react-hook-form";
import UseAxios from "../Hooks/UseAxios";
import UseAdmin from "../Hooks/UseAdmin";
import Swal from "sweetalert2";

const Deposit = () => {
  const [userInfo]=UseAdmin()
  const axios=UseAxios();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if(data.amount>=10){
      axios.put(`/deposit/${userInfo?.email}`,{amount:data?.amount})
      .then(()=>{
        axios.post(`/paymentsystem?email=${userInfo?.email}`,data)
        .then(res=>{
          console.log(res.data.url);
          window.location.replace(res.data.url);
        })})
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'opps insufficient balance',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
   
    
  };

  return (
    <div className="max-w-[600px] lg:min-h-screen px-9 my-10 border-x-2 border-dotted  border-[#353A4D]">
      <h2 className="text-2xl my-3 font-bold text-center">Please fill up the form to deposit
      </h2>
      <form
        className="flex flex-col text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label className="font-bold " htmlFor="email">
          Your Email
        </label>
        <input defaultValue={userInfo?.email}
          type="email"
          className="input input-bordered"
          {...register("email", { required: true })}
        />
        <label className="font-bold " htmlFor="text">
          Your Name
        </label>
        <input 
       
          type="text" 
          className="input input-bordered"
          defaultValue={userInfo?.name}
          {...register("name")}
        />
        <label className="font-bold " htmlFor="text">
          Type
        </label>
        <input
          type="text"
          className="input input-bordered"
          defaultValue="deposit"
          {...register("type")}
        />
        <label className="font-bold " htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          className="input input-bordered"
          defaultValue="0"
          {...register("amount")}
          required
        />
        <label className="font-bold " htmlFor="date">
          Date
        </label>
        <input
          type="date"
          className="input input-bordered"
          defaultValue="0"
          {...register("date")}
          required
        />

        {/* include validation with required or other standard HTML validation rules */}

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="input input-bordered text-white"
          value={"Deposit"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Deposit;

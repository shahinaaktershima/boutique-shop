"use client"
import Transection from "@/components/Deposit/Transection";
import UseAdmin from "@/components/Hooks/UseAdmin";
import Swal from "sweetalert2";

const paymentSuccess = () => {
    const [userInfo]=UseAdmin();
Swal.fire({
    position: "top-end",
    icon: "success",
    title: `${userInfo.name}'s payment successfull!`,
    showConfirmButton: false,
    timer: 1500
  });
    return (
      <div className="flex flex-col gap-8 lg:flex-row">
       <Transection></Transection>
        </div>
    );
};

export default paymentSuccess;

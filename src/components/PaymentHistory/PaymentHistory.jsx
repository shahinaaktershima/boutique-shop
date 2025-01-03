"use client";

import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";
import { FaTrash } from "react-icons/fa";

const PaymentHistory = () => {
  const [history, setHistort] = useState([]);
  const { user } = UseAuth();
  const axios = UseAxios();
  

  useEffect(() => {
    axios
      .get(`/paymenthistory?email=${user?.email}`)
      .then((res) => setHistort(res.data));
  }, [user,axios]);

  console.log(history);

  return (
    <div className="text-white">
       { history  ?  (
        <div className="overflow-x-auto text-white">
          <table className="table table-pin-rows table-pin-cols">
            <thead className="text-lg text-white">
              <tr className="bg-blue-600">
                <td>Payment ID</td>
                <td>Payment Type</td>
                <td>Email</td>
                <td>Amount</td>
                <td>Time</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {history?.map((tran) => (
                <tr className="border-b border-white" key={tran._id}>
                  <td>{tran?._id}</td>
                  <td>{tran?.type || tran?.deposit?.type}</td>
                  <td>{tran?.email || tran?.deposit?.email}</td>
                  <td>{tran?.amount || tran?.deposit?.amount}</td>
                  <td>{tran?.date}</td>
                  <td className="text-2xl text-red-600 cursor-pointer" ><FaTrash/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) :(
        <div className="flex justify-center items-center h-[calc(100vh-67px)] flex-col gap-2">
          <h1 className="text-3xl font-semibold">No Payment History</h1>
          <p>Its look like you are not transection any time!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;

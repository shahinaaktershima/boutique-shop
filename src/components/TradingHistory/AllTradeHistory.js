"use client";

import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";
import { toast } from "react-hot-toast";

const AllTradeHistory = () => {
  const [trade, setTrade] = useState([]);
  const { user } = UseAuth();
  const axios = UseAxios();

  useEffect(() => {
    axios.get(`/trade`).then((res) => setTrade(res.data));
  }, [user, axios,trade]);
  console.log(trade);

  const handelTrading = (event, trad) => {
    const status = event.target.value;
    // trad.status = status; 
    console.log(trad,status);

    axios.put(`/trade/${trad?._id}`,{status:status})
    .then((res)=>{
      toast.success('trade status update sucessfully')
      if(status === 'win'){
        axios.put(`/tradeUserUpdate/${trad?.email}`,{amount:trad?.amount * 1.5})
        .then((res)=>{
          console.log(res);
        })
      }
    })
    .catch(err=>toast.error(err.message))
  };

  return (
    <div className="text-white">
      <div className="overflow-x-auto text-white">
        <table className="table table-pin-rows table-pin-cols">
          <thead className="text-lg text-white">
            <tr className="bg-[#585661]">
              <td>Email</td>
              <td>Amount</td>
              <td>Time Limit</td>
              <td>Pradiction</td>
              <td>Time</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {trade?.map((trad) => (
              <tr className="border-b border-white" key={trad._id}>
                <td>{trad.email}</td>
                <td>{trad?.amount}</td>
                <td>{trad?.timeLimit}</td>
                <td>{trad?.pridction}</td>
                <td>{trad?.time}</td>
                <td>
                  {trad?.status === "panding" ? (
                    <select
                      onChange={(event) => handelTrading(event, trad)}
                      value={trad.status} // Set the value of the select to the current status
                      className="px-2 py-1 text-base"
                    >
                      <option disabled value="panding">panding</option>
                      <option value="win">Win</option>
                      <option value="lost">Lost</option>
                    </select>
                  ) : (
                    <div className={trad?.status === "win" ? 'badge badge-primary' : 'badge badge-error'}>{trad?.status}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTradeHistory;

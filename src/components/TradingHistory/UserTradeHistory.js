"use client";

import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";

const UserTradeHistory = () => {
  const [trade, setTrade] = useState([]);
  const { user } = UseAuth();
  const axios = UseAxios();

  useEffect(() => {
    axios.get(`/trade?email=${user?.email}`).then((res) => setTrade(res.data));
  }, [user, axios]);
  console.log(trade);


  return (
    <div className="text-white">
      {trade ? (
        <div className="overflow-x-auto text-white">
          <table className="table table-pin-rows table-pin-cols">
            <thead className="text-lg text-white">
              <tr className="bg-[#585661]">
                <td>Trading Id</td>
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
                  <td>{trad._id}</td>
                  <td>{trad?.amount}</td>
                  <td>{trad?.timeLimit}</td>
                  <td>{trad?.pridction}</td>
                  <td>{trad?.time}</td>
                  <td>{trad?.status === 'panding' ? <div className="badge badge-primary">{trad?.status}</div> : trad?.status === 'win' ? <div className="badge badge-warning">Win</div> : <div className="badge badge-error">Lost</div>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-67px)] flex-col gap-2">
          <h1 className="text-3xl font-semibold">No Tading History</h1>
          <p>Its look like you are not trading any time!</p>
        </div>
      )}
    </div>
  );
};

export default UserTradeHistory;

"use client";

import { useEffect, useState } from "react";
import UseAxios from "../Hooks/UseAxios";

const Alltransaction = () => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [query, setQuery] = useState('');
  const axios = UseAxios();
  useEffect(() => {
    axios.get(`/payment?currentPage=${currentPage}&query=${query}`).then((res) => setTransaction(res.data));
  }, [currentPage,query,axios]);

  useEffect(() => {
    axios.get("/paymentCount").then((res) => setPageCount(res.data.count));
  }, [axios]);

  const pageSize = Math.ceil(pageCount / 10);
  const pages = [];
  for (let i = 1; i < pageSize; i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div>
      <h2 className="text-3xl font-bold text-center">ALL transection by cards</h2>
        <form>
            <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search with email" className="mb-4 px-5 py-2 placeholder:text-white bg-gray-700 text-white" />
        </form>
      <div className="overflow-x-auto text-white">
        <table className="table table-pin-rows table-pin-cols">
          <thead className="text-lg text-white">
            <tr className="bg-blue-600">
              <td>Payment ID</td>
              <td>Payment Type</td>
              <td>Email</td>
              <td>Amount</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {transaction.map((tran) => (
              <tr className="border-b border-white" key={tran._id}>
                <td>{tran?._id}</td>
                <td>{tran?.type || tran?.deposit?.type}</td>
                <td>{tran?.email || tran?.deposit?.email}</td>
                <td>{tran?.amount || tran?.deposit?.amount}</td>
                <td>{tran?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 items-center justify-end my-6">
        <button
          className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-blue-500 text-center align-middle font-sans text-xs font-medium uppercase text-blue-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </span>
        </button>
        <p>
          Page <strong>{currentPage + 1}</strong> of <strong>{pageSize}</strong>
        </p>
        <button
          className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-blue-500 text-center align-middle font-sans text-xs font-medium uppercase text-blue-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-700 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleNext}
          disabled={transaction.length < 6}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Alltransaction;

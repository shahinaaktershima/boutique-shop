import moment from "moment";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaMinus, FaPlus } from "react-icons/fa";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import { toast } from "react-hot-toast";
import UseAxios from "../Hooks/UseAxios";

const Trading = () => {
  const [time, setTime] = useState("05:00");
  const [amount, setAmount] = useState(20);
  const { user } = UseAuth();
  const [userInfo] = UseAdmin();
  console.log(userInfo);
  const axios = UseAxios();

  const timeArr = [
    "05:00",
    "10:00",
    "15:00",
    "20:00",
    "25:00",
    "30:00",
    "35:00",
    "40:00",
    "45:00",
    "50:00",
    "55:00",
  ];

  const handelTradeing = (sts) => {
    const body = {
      email: user?.email,
      amount: amount,
      timeLimit: time,
      pridction: sts,
      time: moment().format("llll"),
      status: "panding",
    };
    // console.log(body);
    if (userInfo?.balance < body?.amount) {
      return toast.error("influencing balance");
    } else {
      axios.post("/trade", body).then(() => {
        axios.put(`/trade-uodate/${user?.email}`, { amount }).then((res) => {
          toast.success('trading sucessfully')
        });
      });
    }
  };

  return (
    <div className="bg-[#2B3040] grid grid-cols-2 md:grid-cols-4 gap-7 py-8 px-5 text-white mt-5">
      <div className="dropdown dropdown-top">
        <div
          tabIndex={0}
          role="button"
          className="flex justify-center py-3 rounded border-[#6B6F7A] border"
        >
          {time}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] grid grid-cols-3 gap-2 menu p-2 shadow bg-[#353A4D] mb-2 w-52"
        >
          {timeArr?.map((time) => (
            <a
              onClick={() => setTime(time)}
              key={time}
              className="bg-[#4A4E5F] px-3 py-2 cursor-pointer rounded-sm"
            >
              {time}
            </a>
          ))}
        </ul>
      </div>
      <div className="flex justify-between px-2 items-center py-2 rounded border-[#6B6F7A] border">
        <button
          disabled={amount === 10}
          onClick={() => setAmount(amount - 10)}
          className="bg-[#676B79] px-1.5 py-1.5 rounded-full cursor-pointer"
        >
          <FaMinus />
        </button>
        <span className="font-semibold">{amount}$</span>
        <button
          disabled={amount === 100}
          onClick={() => setAmount(amount + 10)}
          className="bg-[#676B79] px-1.5 py-1.5 rounded-full cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>
      <button
        onClick={() => handelTradeing("up")}
        className="py-2 bg-[#0FAF59] flex items-center justify-between px-3 cursor-pointer rounded"
      >
        <span className="font-bold">Up</span>
        <span className="bg-[#6ECF9B] px-1.5 py-1.5 rounded-full cursor-pointer">
          <FaArrowUp />
        </span>
      </button>
      <button
        onClick={() => handelTradeing("down")}
        className="py-2 bg-[#FF6251] flex items-center justify-between px-3 cursor-pointer rounded"
      >
        <span className="font-bold">Down</span>
        <span className="bg-[#FF9186] px-1.5 py-1.5 rounded-full cursor-pointer">
          <FaArrowDown />
        </span>
      </button>
    </div>
  );
};

export default Trading;

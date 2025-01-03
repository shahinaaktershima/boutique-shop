
"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdStopwatch } from "react-icons/io";
import { MdDetails } from "react-icons/md";
// import getAllTournament from "../../../../../utils/getAllTournament";

   function Tournaments() {
  // const tournaments = await getAllTournament();
  // console.log(tournaments);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    async function fetchTournaments() {
      const response = await fetch("http://localhost:5000/tournament");
      const data = await response.json();
      setTournaments(data);
    }

    fetchTournaments();
  }, []);
  console.log(tournaments);

  const activeTournaments = tournaments.filter(
    (tournament) => tournament.start_date !== "finished"
  );
  // console.log(tournaments._id);

  const completedTournaments = tournaments.filter(
    (tournament) => tournament.start_date === "finished"
  );

  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1);
  };

  const renderContent = () => {
    const pageTournaments =
      currentPage === 1 ? activeTournaments : completedTournaments;

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 space-x-3">

     

          {pageTournaments.map((tournament) => (
            <div key={tournament.id} className="card shadow-xl image-full">


              <figure>
                <Image
                  src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png"
                  alt="icon"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <div className="flex gap-2">
                  <IoMdStopwatch className="text-white font-extrabold text-2xl" />
                  <span className="card-title text-sm font-bold text-white bg-pink-800 p-1 rounded-lg">
                  
                    {tournament.start_date}
                  </span>
                </div>
                <p className="mt-10 text-white text-center text-2xl">
                  <span className="bg-pink-800 p-1 rounded-lg">
                    
                    {tournament.title}
                  </span>
                </p>
                <div className="text-green-700 text-center rounded-full bg-slate-200 font-extrabold my-5 space-y-3 text-lg">
                  <p> Prize pool </p>
                  <p> {tournament.prize_money} </p>
                  
                </div>
                <div className="flex w-full text-white font-extrabold bg-slate-800">
                  <div className="grid h-20 flex-grow card rounded-box place-items-center">
                    <span className="text-lg "> {tournament.entry_fee} </span>
                    <span> Entry Fee </span>
                  </div>
                  <div className="divider divider-horizontal"></div>
                  <div className="grid h-20 flex-grow card  rounded-box place-items-center">
                    <span className="text-lg "> {tournament.duration} </span>
                    <span> Duration </span>
                  </div>
                </div>


                <Link
                  className="text-center mt-4"
                  href={`/userdashboard/tournaments/${tournament._id}`}
                >


                  <button className="btn btn-xs sm:btn-sm md:btn-md text-white btn-wide lg:btn-lg ">
                
                    <span className="text-xl">  details </span>
                    <MdDetails className="text-2xl"></MdDetails>
                  </button>


                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="join grid grid-cols-2">

     
        <button
          className="join-item btn btn-outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Active


        </button>


        <button
          className="join-item btn btn-outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Completed
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}
export default Tournaments;

 

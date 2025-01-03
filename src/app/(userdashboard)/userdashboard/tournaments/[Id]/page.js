"use client"
import { IoMdReturnLeft } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdStopwatch } from "react-icons/io";
import { MdDetails } from "react-icons/md";
import { FaExclamation, FaPlus, FaQuestion } from "react-icons/fa6";
import { GiLaurelsTrophy } from "react-icons/gi";


const Page = ({params}) => {

    console.log(params);



    const [tournament, setTournament] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(params.Id);


    useEffect(()=>{

    

        fetch(`http://localhost:5000/tournament/details/${params.Id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setTournament(data); 
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching tournament:', error);
            setError('Error fetching tournament data. Please try again later.');
            setLoading(false);
        });



    } , [params.Id])

    console.log(tournament);

    if (loading) {
        return <span className="loading loading-spinner text-warning"></span>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    // console.log(data);
    return (



        <div className="flex flex-col  lg:flex-row">


            <Link href={'/userdashboard/tournaments'}>  <button className="btn btn-active text-xl btn-link"> <IoMdReturnLeft></IoMdReturnLeft> Return Back </button> </Link>
        


<div className="flex-1">


{/* card  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 space-x-3">

     




<div className="card w-96 bg-gray-300 text-primary-content">
  <div className="card-body">
    <h2 className="card-title"> {tournament.title} </h2>
    
   
    <p className="text-red-700 font-bold border-dashed border-2 border-sky-500 p-2 m-2 text-center   text-lg  "> Start Date : {tournament.start_date}</p>
    
  </div>

  <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card border border-3  rounded-box place-items-center"> Prize pool <span> {tournament.prize_money} </span> </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-32 card border border-3 rounded-box place-items-center"> Entry fee  <span> {tournament.entry_fee} </span>  </div>
  <div className="divider lg:divider-horizontal"></div>
  <div className="grid flex-grow h-32 card border border-3 rounded-box place-items-center"> Duration  <span> {tournament.duration} </span>  </div>
</div>



      

      {/* Open the modal using document.getElementById('ID').showModal() method */}




{tournament.start_date !== "finished" &&

( <> 

<button className="btn btn-success mb-5 mt-5" onClick={() => document.getElementById('my_modal_5').showModal()}>
    join now /-- 10$
  </button>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
  <h3 className="font-bold text-lg text-white text-center ">
    
    Confirm Your Participation 
    </h3>
    <hr className="m-5"/>

    <div className="overflow-x-auto">
  <table className="table text-white mt-5">
    {/* head */}
    
    <tbody className="text-center ">
      {/* row 1 */}
      <tr>
        
        <td> Tournament </td>
        <td> {tournament.title} </td>
       
      </tr>
      {/* row 2 */}
      <tr className="">
        
        <td> Entry Fee </td>
        <td>$10</td>
       
      </tr>
     
    </tbody>
  </table>

  <div className="border text-center "> 

  <h2 className="text-red-400 p-2 m-2 text-center mt-5 text-lg"> You need to deposit $10 </h2>

  <Link href='/userdashboard/deposite'> <button className="btn btn-outline  btn-wide mx-auto m-5  btn-accent text-lg"> <FaPlus className="text-lg" /> Deposit </button> </Link>




  </div>

  

</div>
    
  
  <div className="modal-action">
    <form method="dialog">
    
      <button className="btn">Close</button>
    </form>
  </div>
</div>
</dialog> 

</>
  


)}

   

  
</div>




</div>




   



    



{/* description */}
<div className="mt-10 relative "> 

<div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
  <h2 className="card-title text-xl font-bold mt-5 text-white"> Description </h2>
  <p className="mt-3 font-bold ">{tournament.description}</p>

  <div className="card-actions -mt-12 mb-5 justify-end absolute">
    {/* Open the modal using document.getElementById('ID').showModal() method */}
    
<button className="btn" onClick={()=>document.getElementById('my_modal_6').showModal()}> <FaExclamation  className="text-lg font-extrabold text-blue-300"/>Prize Pool Distribution</button>
<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">


  <div className="modal-box ">

  <GiLaurelsTrophy className="text-4xl font-extrabold text-green-400  mb-5 mx-auto" />
    
    <h3 className="font-bold text-lg text-center text-white"> Prize Pool distribution </h3>

    <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead className="text-yellow-600 font-bold">
      <tr>
        
        <th>Position</th>
        <th>Prize</th>
     
      </tr>
    </thead>
    <tbody className="">
      {/* row 1 */}
      <tr className="bg-base-200">
        
        <td>1st Place</td>
        <td className="text-green-500"> 1300$ </td>
        
      </tr>
      {/* row 2 */}
      <tr>
       
        <td> 2nd Place </td>
        <td className="text-green-500"> 800$ </td>
       
      </tr>
      {/* row 3 */}
      <tr>
       
        <td> 3rd Place </td>
        <td className="text-green-500"> 400$ </td>
      
      </tr>
      <tr>
       
        <td> 4th Place </td>
        <td className="text-green-500"> 300$ </td>
      
      </tr>
      <tr>
       
        <td> 5th Place </td>
        <td className="text-green-500"> 200$ </td>
      
      </tr>
    </tbody>
  </table>
</div>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
      
    </div>
   
  </div>
</dialog>
    
  </div>
</div>
</div>
  
   </div>
</div>



{/* Faq section */}

<div className="flex-1">
    <h2 className="mt-10 ml-5 flex gap-3 justify-center items-center text-xl font-bold text-white"> FAQ <FaQuestion className="font-bold text-red-600"/> </h2>




<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-blue-400  text-xl font-medium">
   What is a Tournament
  </div>
  <div className="collapse-content text-white"> 
    <p>A tournament is a competition between traders on the Platform. When entering a tournament all participants get equal amount of nominal units to their separate tournament accounts. Then you would place trades using this tournament account’s funds. Whoever managed to get the biggest balance at the end of a tournament – becomes a winner.</p>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl text-blue-400 font-medium">
    What is the price of entering a tournament
  </div>
  <div className="collapse-content text-white"> 
    <p>Every tournament may have its own entry fee. The higher it is the bigger the final prize pool. Free tournaments are being held as well. You can get the detailed information in the description of the exact tournament.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-blue-400 text-xl font-medium">
   How is a Winner is determined
  </div>
  <div className="collapse-content text-white"> 
    <p>By taking part in the tournament each trader gets equal amount of nominal units to a special tournament account. Then you would need to place trades using this account’s funds. The one whose account’s balance is the biggest of all at the end of the tournament – is considered a winner.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-blue-400 text-xl font-medium">
   What are the reasons for disqualification
  </div>
  <div className="collapse-content text-white"> 
    <p>BIn case you made no trades by the end of the tournament – you get disqualified automatically.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-blue-400 text-xl font-medium">
 If I win , when will i get the money
  </div>
  <div className="collapse-content text-white"> 
    <p>Prize funds get transferred to the balance of your trading account within 24 hours after a tournament has ended.</p>
  </div>
</div>
</div>
      


      
       
            
          
            
        </div>
    );
};

export default Page;
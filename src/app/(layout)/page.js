

import Footertop from "@/components/Footertop";

import Getstarted from "@/components/Getstarted";
import Banner from "@/components/Home/Banner/Banner";
import Whyinvest from "@/components/WhyshoppingwithBoutique";

import React from "react";
import Clients from "@/components/Clients";



const HomePage = () => {
  return <div>
    <Banner/>
    <Whyinvest></Whyinvest>
    
   <Clients></Clients>
   <Getstarted></Getstarted>
   

   
   
    <Footertop></Footertop>
  </div>;
};

export default HomePage;

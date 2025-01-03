import AboutUs from "@/components/AboutUs";
import Link from "next/link";


const AboutPage = () => {  
    return (
        <div className="">
     <div className="min-h-screen">
      <div className="h-80" style={{backgroundImage: "url(https://i.ibb.co/KVVxYts/sub-Banner.png)",backgroundRepeat:"no-repeat",backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="container h-full flex flex-col gap-y-4 justify-center mx-auto px-4">
          <h1 className="text-5xl font-bold"> About Us </h1>
          <p className="text-lg font-semibold"><Link className="text-green-600" href='/'>Home</Link> / about</p>
        </div>
      </div>
      <div className="container mx-auto px-2">
       <AboutUs></AboutUs>
      </div>
    </div>
        </div>
    );
};

export default AboutPage;
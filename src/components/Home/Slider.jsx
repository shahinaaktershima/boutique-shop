import Marquee from "react-fast-marquee";


const Slider = () => {
    return (
        <div>

            <h2 className="text-center mt-4 font-bold text-4xl text-blue-400">Our Client service</h2>
            <Marquee className="mt-10 h-55 w-55">
          
            <img className="h-[400px] w-full " src="https://i.postimg.cc/pTMh9QCN/image.png" alt="" />
            <img className=" h-[400px] w-full" src="https://i.postimg.cc/bJ0G1GVZ/image.png" alt="" />
            <img className="  h-[400px]" src="https://i.postimg.cc/C105MhMS/image.png" alt="" />
         
             </Marquee>
        </div>
    );
};

export default Slider;
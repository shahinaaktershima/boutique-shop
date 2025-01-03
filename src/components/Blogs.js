"use client";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
// data fetching
  const [getBlogData, setGetBlogData] = useState([]);
  useEffect(() => {
    fetch("https://boutique-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
      setGetBlogData(data);
      setIsLoading(false);
      })
  }, []);

  // keen slider
   const [sliderRef] = useKeenSlider(
     {
       loop: true,
     },
     [
       (slider) => {
         let timeout;
         let mouseOver = false;
         function clearNextTimeout() {
           clearTimeout(timeout);
         }
         function nextTimeout() {
           clearTimeout(timeout);
           if (mouseOver) return;
           timeout = setTimeout(() => {
             slider.next();
           }, 2000);
         }
         slider.on("created", () => {
           slider.container.addEventListener("mouseover", () => {
             mouseOver = true;
             clearNextTimeout();
           });
           slider.container.addEventListener("mouseout", () => {
             mouseOver = false;
             nextTimeout();
           });
           nextTimeout();
         });
         slider.on("dragStarted", clearNextTimeout);
         slider.on("animationEnded", nextTimeout);
         slider.on("updated", nextTimeout);
       },
     ]
   );
  // slice data for slider
  const sliceData = getBlogData.slice(5, 11);

  if(isLoading){
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <Image
          className="animate-spin w-30 h-30"
          src="https://i.postimg.cc/mrcxYYTF/image.png"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
    );
  }

  return (
    <>
      {/* keen slider */}
      <div ref={sliderRef} className="keen-slider">
        {sliceData &&
          sliceData.map((sliderData) => (
            <Link href={`../${sliderData?.tag}/${sliderData._id}`} key={sliderData._id}>
            <div
              key={sliderData._id}
              className="keen-slider__slide number-slide1 mb-6"
            >
              <div className="flex justify-center md:gap-16 gap-6 bg-[#1D232A] cursor-pointer space-y-3  p-5 rounded-md">
                <div
                  className="h-[160px] w-[310px] md:h-[300px] md:w-[600px] mb-3 rounded-md"
                  style={{
                    backgroundImage: `url('${sliderData.image}')`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="md:space-y-4 space-y-2">
                  <p className="bg-[#0c1513] md:text-base text-xs font-semibold text-[#00d094] py-1 px-2 rounded inline">
                    {sliderData.tag}
                  </p>
                  <h1 className="md:text-6xl text-green-600 text-lg font-bold">
                    #{sliderData.title}
                  </h1>
                  <p className="text-[#97ABA9] hidden md:block text-justify">
                    {sliderData.description.slice(0, 130)}...
                  </p>
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <h5 className="md:text-xl text-base font-semibold">
                        {sliderData?.author?.name}
                      </h5>
                      <p className="text-[#97ABA9]">
                        {sliderData?.author?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             </Link>
          ))}
      </div>

      <h1 className="my-4 md:text-6xl text-4xl font-bold text-gray-300">
        Most Recent
      </h1>

      {/* blog card */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {getBlogData.map((blog) => (
          <Link href={`../${blog?.tag}/${blog._id}`} key={blog._id}>
            <div className="bg-[#1D232A] hover:bg-[#2B3139] cursor-pointer space-y-3  p-5 rounded-md">
              <div
                className="w-full h-[190px] mb-3 rounded-md"
                style={{
                  backgroundImage: `url('${blog.image}')`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="bg-[#0c1513] text-sm font-semibold text-[#00d094] py-1 px-2 rounded inline">
                {blog.tag}
              </p>
              <h1 className="text-2xl text-green-600 font-bold">{blog.title}</h1>
              <p className=" text-justify">
                {blog.description.slice(0, 130)}...
              </p>
              <div className="flex items-center gap-3">
                
                <div>
                  <h5 className="text-xl font-semibold">
                    {blog?.author?.name}
                  </h5>
                  <p className="text-[#97ABA9]">{blog?.author?.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogs;

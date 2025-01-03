"use client"
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import UseAxios from "@/components/Hooks/UseAxios";

const BlogsComponent = () => {
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {blogId} = useParams();
  const axios = UseAxios()

  const blogDetailsData = blogData.data;

   useEffect(() => {
     axios(`/blogs/${blogId}`)
       .then((data) => {
        setBlogData(data)
        setIsLoading(false);
      });
   }, [blogId,axios]);

     if (isLoading) {
       return (
         <div className="w-full h-[80vh] flex justify-center items-center">
           <Image
             className="animate-spin w-30 h-30"
             src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png"
             alt="logo"
             width={50}
             height={50}
           />
         </div>
       );
     }
  return (
    <div className="max-w-screen-2xl p-4 mx-auto relative">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-white">
            {blogDetailsData.title}
          </h1>
          <Image
            className="my-10 w-[300px] h-[200px] md:w-[550px] md:h-[350px] lg:w-[900px] lg:h-[650px]"
            src={blogDetailsData?.image}
            width={400}
            height={300}
            alt="blog image"
          />
          <p className="my-4 text-2xl text-white">Category: {blogDetailsData.tag}</p>
          <p className="text-xl text-gray-300 leading-relaxed">
            {blogDetailsData.description}
          </p>
          <div className="flex items-center gap-3 mt-10">
            <Image
              className="rounded-full"
              src={blogDetailsData?.author?.image}
              width={50}
              height={50}
              alt={blogDetailsData?.author?.name}
            />
            <div>
              <h5 className="md:text-xl text-base font-semibold">
                {blogDetailsData?.author?.name}
              </h5>
              <p className="text-[#97ABA9]">{blogDetailsData?.author?.date}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 fixed z-10 top-40 right-0">
          <p className="text-gray-300 text-lg">Share</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 cursor-pointer mt-2">
            <p className="text-[#1F67FF] bg-white rounded-full p-2 border">
              <FaTwitter />
            </p>
            <p className="text-[#1F67FF] bg-white rounded-full p-2 border">
              <FaFacebookF />
            </p>
            <p className="text-[#1F67FF] bg-white rounded-full p-2 border">
              <FaLinkedinIn />
            </p>
            <p className="text-[#1F67FF] bg-white rounded-full p-2 border">
              <FaLink />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;

import Blogs from '@/components/Blogs';
import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    return (
        <div className="min-h-screen">
        <div className="h-80" style={{backgroundImage: "url(https://i.ibb.co/KVVxYts/sub-Banner.png)",backgroundRepeat:"no-repeat",backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="container h-full flex flex-col gap-y-4 justify-center mx-auto px-4">
            <h1 className="text-5xl text-gray-400 font-bold">Blogs</h1>
            <p className="text-lg text-gray-400 font-semibold"><Link className="text-green-600" href='/'>Home</Link> /Blog</p>
          </div>
        </div>
        <div className="container mx-auto px-4 my-16">
            <Blogs/>
        </div>
      </div>
    );
};

export default BlogPage;
/**
 * The above code is a React component that renders a blog page with a header and a list of blogs.
 * @returns The BlogPage component is being returned.
 */
import Blogs from '@/components/Blogs';
import Link from 'next/link';

const BlogPage = async () => {
    return (
        <div className="min-h-screen">
        <div className="h-80" style={{backgroundImage: "url(https://i.postimg.cc/mrcxYYTF/image.png)",backgroundRepeat:"no-repeat",backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="container h-full flex flex-col gap-y-4 justify-center mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold">Blogs</h1>
            <p className="text-lg font-semibold"><Link className="text-[#00D094]" href='/'>Home</Link> /Blog</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 mb-12">
            <Blogs/>
        </div>
      </div>
    );
};

export default BlogPage;
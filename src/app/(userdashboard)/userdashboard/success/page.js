import Image from "next/image";


const page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-4">
                    <Image className="animate-spin w-44 h-44" src="https://i.postimg.cc/CMvfz1RW/image.png" alt="payment image" width={500} height={500}/>
                </div>
    );
};

export default page;
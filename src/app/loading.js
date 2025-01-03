import Image from "next/image";
const loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <Image className="animate-spin w-44 h-44" src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png" alt="logo" width={250} height={250}/>
        </div>
    );
};

export default loading;
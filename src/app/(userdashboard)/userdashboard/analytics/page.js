

const page = () => {
    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="px-5 py-4 text-[#dfe2ec] bg-blue-600 rounded-md">
              <h1 className="text-xl font-semibold">Total Users </h1>
              <h2 className="text-3xl font-bold">2k +</h2>

            </div>
            <div className="px-5 py-4 text-[#dfe2ec] bg-blue-600 rounded-md">
              <h1 className="text-xl font-semibold">Total Transation</h1>
              <h2 className="text-3xl font-bold">5k+</h2>
            </div>
            <div className="px-5 py-4 text-[#dfe2ec] bg-blue-600 rounded-md">
              <h1 className="text-xl font-semibold">Total Trading</h1>
              <h2 className="text-3xl font-bold">15k+</h2>
            </div>
          </div> 
        </div>
    );
};

export default page;
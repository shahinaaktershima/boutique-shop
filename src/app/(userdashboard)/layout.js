"use client";
import UseAdmin from "@/components/Hooks/UseAdmin";;
import SideBar from "@/components/SideBar";

const layout = ({ children }) => {
  //responsive
  const [userInfo] = UseAdmin();
  return (
    <div className="flex flex-col lg:flex-row container">
    <div className="lg:h-screen lg:w-64 z-50">
      <SideBar userInfo={userInfo} />
    </div>
    <div className="px-4 py-3  lg:w-[calc(100%-256px)]">
      {children}
    </div>
  </div>
  );
};

export default layout;
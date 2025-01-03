"use client";
import UseAdmin from "@/components/Hooks/UseAdmin";
import Image from "next/image";

const page = () => {
  const [userInfo] = UseAdmin();
  // const body = {name,birth,country,address,photo}
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            className="rounded-full w-[200px] h-[200px] object-cover"
            height={200}
            width={200}
            src={userInfo.photo}
            alt="this is the user photo"
          ></Image>
        </figure>
        <div className="card-body items-center text-center">
          <p>About me:{userInfo.aboutme}</p>
          <h2 className="card-title">{userInfo.name}</h2>
          <h2 className="card-title">Email:{userInfo.email}</h2>
          <h2 className="card-title">Country:{userInfo.country}</h2>
          <p>Birthdate:{userInfo.birth}</p>
          <p>Education:{userInfo.education}</p>
          <p>Address:{userInfo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default page;

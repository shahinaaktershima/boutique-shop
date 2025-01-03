
"use client"



import UseAdmin from "@/components/Hooks/UseAdmin";
import UseAxios from "@/components/Hooks/UseAxios";
import { toast } from "react-hot-toast";

import countryList from "react-select-country-list";


const page = () => {

  const [userInfo] = UseAdmin() ;
  const country = countryList();
  const axios = UseAxios()

  const handleUpdate = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value; 

    const photo=form.photo.value;
    const aboutme=form.aboutme.value;
    const birth = form.birth.value; 
    const education=form.education.value;
    const country = form.country.value; 
    const address = form.address.value; 
    const body = {name,birth,country,address,photo,education,aboutme}
    console.log(body);
    axios.put(`/user/${userInfo.email}`,body)
    .then(()=>{
      toast.success('Your information update sucessfully')
    })
    .catch(err=>{
      console.log(err);
    })
  }


  return (
    <div className="text-white">
      <form onSubmit={handleUpdate} className="max-w-md mt-7">
        <div>
          <h5 className="text-sm font-medium mb-1">User Name</h5>
          <input
            type="text"
            name="name"
            defaultValue={userInfo?.name}
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">User Email</h5>
          <input
            type="email"
            readOnly
            disabled
            name="email"
            defaultValue={userInfo?.email}
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">User Image</h5>
          <input
            type="text"
            defaultValue={userInfo.photo}
            
            name="photo"
            placeholder="photo url"
         
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Date of birth</h5>
          <input
            type="date"
            defaultValue={userInfo.birth}
            name="birth"
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Country</h5>
          <select defaultChecked={userInfo.country} className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]" name="country" id="">
            { country.data.map(country=><option key={country.value} defaultValue={userInfo.country} value={country.label} >{country.label}</option>)}
          </select>
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Address</h5>
          <input
          defaultValue={userInfo.address}
            type="text"
            name="address"
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">Education</h5>
          <input
            type="text"
            defaultValue={userInfo.education}
            
            name="education"
            placeholder="education"
         
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <div className="mt-3">
          <h5 className="text-sm font-medium mb-1">About me</h5>
          <input
            type="text"
            defaultValue={userInfo.aboutme}
            
            name="aboutme"
            placeholder="aboutme"
         
            className="w-full px-3 py-2 border border-gray-300 bg-[#0B1325]"
          />
        </div>
        <input type="submit" value='Update' className="bg-[#026FD3] text-white w-full py-2 font-medium mt-3 cursor-pointer" />
      </form>
    </div>
   );
};

export default page;

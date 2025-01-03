"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmufqwa",
        "template_zv8x88g",
        form.current,
        "D8rDIkKl7gptQMW5Z"
      )
      .then(
        () => {
          toast.success("Successfully Sent Message");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div className="flex gap-8 flex-col lg:flex-row text-white my-16">
      <div className="w-full lg:w-1/3">
        <h1 className="text-3xl text-green-600 font-bold">
          Let’s <span className="">Get In Touch</span> <br /> With
          Us
        </h1>
        <div className="mt-7 flex items-center gap-4">
          <p className="text-[#00d094] cursor-pointer w-12 border-2 text-center px-3 rounded-full border-[#00d094] py-3 text-xl">
            <FaFacebookF />
          </p>
          <p className="hover:text-[#00d094] text-white cursor-pointer transition-all w-12 border-2 text-center px-3 rounded-full border-gray-500 hover:border-[#00d094] py-3 text-xl">
            <FaInstagram />
          </p>
          <p className="hover:text-[#00d094] text-white cursor-pointer transition-all w-12 border-2 text-center px-3 rounded-full border-gray-500 hover:border-[#00d094] py-3 text-xl">
            <FaLinkedinIn />
          </p>
          <p className="hover:text-[#00d094] text-white cursor-pointer transition-all w-12 border-2 text-center px-3 rounded-full border-gray-500 hover:border-[#00d094] py-3 text-xl">
            <FaYoutube />
          </p>
          <p className="hover:text-[#00d094] text-white cursor-pointer transition-all w-12 border-2 text-center px-3 rounded-full border-gray-500 hover:border-[#00d094] py-3 text-xl">
            <FaTwitter />
          </p>
        </div>
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <p className="bg-[#2d4941] p-5 rounded-full text-xl">
              <FaPhoneAlt />
            </p>
            <div className="text-[#88928F] font-semibold text-lg">
              <p>01346377899</p>
              <p>0983888611</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-7">
            <p className="bg-[#2d4941] p-5 rounded-full text-xl">
              <MdOutlineMailOutline />
            </p>
            <div className="text-[#88928F] font-semibold text-lg">
              <p>shima421914@gmail.com</p>
              <p>hello@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-7">
            <p className="bg-[#2d4941] p-5 rounded-full text-xl">
              <FaLocationDot />
            </p>
            <div className="text-[#88928F] font-semibold text-lg">
              <p>Bandarban sadar, Bandarban</p>
              <p>Bandarban University</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="font-semibold mb-1">Name</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#1B2D29] py-3 px-5 rounded-md border border-[#334441]"
            name="to_name"
          />
          <h1 className="font-semibold mb-1 mt-5">Email</h1>
          <input
            type="email"
            placeholder="Email Here"
            name="from_name"
            className="w-full bg-[#1B2D29] py-3 px-5 rounded-md border border-[#334441]"
          />
          <h1 className="font-semibold mb-1 mt-5">Message</h1>
          <textarea
            name=""
            placeholder="Enter Your Message"
            rows="10"
            className="w-full bg-[#1B2D29] py-3 px-5 rounded-md border border-[#334441]"
          ></textarea>
          <input
            type="submit"
            value="Contact Us Now"
            className="w-full py-3 rounded bg-[#00D094] font-medium mt-5 text-black cursor-pointer text-lg"
          />
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default ContactUs;

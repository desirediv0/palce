import Cards from "@/components/cards";
import { ChevronDown, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="w-100 h-100">
        <div className="grid md:grid-cols-2 px-40 py-28">
          <div>
            <h1 className="text-[#E62E2D] font-bold pb-6 ">CONTACT US</h1>
            <p className="text-5xl text-[#171B2A] font-bold">
              HAVE LEGAL QUERIES? LEAVE THEM TO US.
            </p>
            <p className="text-xl text-[#5A5D68] py-7">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              Aliquam in hendrerit urna
            </p>
            <div className="flex pb-4 pt-2 ">
              <span className=" bg-[#FBEEEE] border border-dotted border-red-600  rounded-full h-14 w-14">
                <MapPin
                  className="absolute top-[392px] left-[177px]"
                  color="red"
                />
              </span>
              <div className="px-6">
                <p className="text-[#5A5D68] text-xl">Address</p>
                <p className="text-black text-xl font-bold">
                  Stone Mountain Park Drive, GA 30083
                </p>
              </div>
            </div>

            <div className="flex py-4">
              <span className=" bg-[#FBEEEE] border border-dotted border-red-600  rounded-full h-14 w-14">
                <PhoneCall
                  className="absolute top-[481px] left-[176px]"
                  color="red"
                />
              </span>
              <div className="px-6">
                <p className="text-[#5A5D68] text-xl">Phone</p>
                <p className="text-black text-xl font-bold">+1 678-772-6710</p>
              </div>
            </div>
            <div className="flex py-4">
              <span className=" bg-[#FBEEEE] border border-dotted border-red-600  rounded-full h-14 w-14">
                <Mail
                  className="absolute top-[568px] left-[177px]"
                  color="red"
                />
              </span>
              <div className="px-6">
                <p className="text-[#5A5D68] text-xl">Email</p>
                <p className="text-black text-xl font-bold">palace@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F9] p-14">
            <h1 className="font-bold text-4xl text-[#171B2A] pb-3">
              GET A FREE QUOTE
            </h1>
            <div className="flex py-4 gap-4 ">
              <input
                placeholder="Name"
                className="border-2 bg-[#F9F9F9] text-[#5A5D68] p-4 pr-24"
              ></input>
              <input
                placeholder="Email"
                className="border-2 bg-[#F9F9F9] text-[#5A5D68] p-4 pr-24"
              ></input>
            </div>
            <div className="flex gap-4 py-2">
              <input
                placeholder="Phone"
                className="border-2 bg-[#F9F9F9] text-[#5A5D68] p-4 pr-24"
              ></input>
              <input
                placeholder="Select Service"
                className="border-2 bg-[#F9F9F9] text-[#5A5D68] p-4 pr-24"
              ></input>
            </div>
            <div className=" py-4 pb-8">
              <input
                placeholder="Write a Message"
                className="border-2 bg-[#F9F9F9] text-[#5A5D68] p-4 w-full pb-32"
              ></input>
            </div>
            <button className="text-white text-md font-bold bg-[#E62E2D] rounded-[200px] p-4 px-9">
              Send Now
            </button>
          </div>
        </div>

        <section className="w-full h-[548px] px-40 ">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592831531685!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cc4c0f9b19d1!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633079622227!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </section>
        <div className="px-40 py-14 grid grid-cols-3 gap-3">
          <Cards />
        </div>
      </div>
    </>
  );
}

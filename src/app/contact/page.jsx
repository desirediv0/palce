import { ChevronDown, Mail, MapPin, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="w-100 h-100">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 lg:px-40 py-16 md:py-28 gap-8">
          <div>
            <h1 className="text-[#E62E2D] font-bold pb-4 md:pb-6">
              CONTACT US
            </h1>
            <p className="text-3xl md:text-5xl text-[#171B2A] font-bold">
              HAVE LEGAL QUERIES? LEAVE THEM TO US.
            </p>
            <p className="text-lg md:text-xl text-[#5A5D68] py-4 md:py-7">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              Aliquam in hendrerit urna
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="flex items-center justify-center bg-[#FBEEEE] border border-dotted border-red-600 rounded-full h-12 w-12">
                  <MapPin color="red" />
                </span>
                <div>
                  <p className="text-[#5A5D68] text-lg md:text-xl">Address</p>
                  <p className="text-black text-lg md:text-xl font-bold">
                    Stone Mountain Park Drive, GA 30083
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center justify-center bg-[#FBEEEE] border border-dotted border-red-600 rounded-full h-12 w-12">
                  <PhoneCall color="red" />
                </span>
                <div>
                  <p className="text-[#5A5D68] text-lg md:text-xl">Phone</p>
                  <p className="text-black text-lg md:text-xl font-bold">
                    +1 678-772-6710
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center justify-center bg-[#FBEEEE] border border-dotted border-red-600 rounded-full h-12 w-12">
                  <Mail color="red" />
                </span>
                <div>
                  <p className="text-[#5A5D68] text-lg md:text-xl">Email</p>
                  <p className="text-black text-lg md:text-xl font-bold">
                    palace@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9F9] p-6 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-4xl text-[#171B2A] font-bold mb-4 pb-2">
              GET A FREE QUOTE
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-3 rounded w-full bg-[#F9F9F9]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded w-full bg-[#F9F9F9]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="border p-3 rounded w-full bg-[#F9F9F9]"
                />
                <select className="border p-3 rounded w-full bg-[#F9F9F9]">
                  <option>Select Service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>
              <textarea
                placeholder="Write a Message"
                className="border p-3 rounded w-full h-32 bg-[#F9F9F9]"
              />
              <div className="pt-3">
                <button className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 w-full md:w-auto">
                  Send Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full h-[548px] px-40 ">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592831531685!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cc4c0f9b19d1!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633079622227!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </>
  );
}

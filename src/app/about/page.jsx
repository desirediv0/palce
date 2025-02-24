import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Testimonial from "@/components/testimonial";

const Page = () => {
  const services = [
    {
      title: "BUILDING CONSTRUCTION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
      icon: "🏢",
    },
    {
      title: "INTERIOR DESIGNING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
      icon: "🏠",
    },
    {
      title: "GENERAL CONSTRUCTION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
      icon: "🏗️",
    },
  ];

  return (
    <>
      <div className="relative bg-blue-100 py-16 md:py-20 flex flex-col items-center text-center w-full">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/pattern.png')" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            ABOUT US
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="text-gray-600 text-sm md:text-base mt-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* section-1 */}

      <section className="container mx-auto px-6 py-16 flex flex-wrap items-center">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/building1.jpg"
              width={400}
              height={400}
              alt="Building 1"
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/building2.jpg"
              width={400}
              height={400}
              alt="Building 2"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg flex items-center gap-4">
            <div className="p-4 bg-white text-red-500 rounded-full">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Client Centric Approach</h3>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 px-6 mt-10 lg:mt-0">
          <h4 className="text-red-500 font-semibold">DISCOVER OUR STORY</h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight my-4">
            UNVEILING PALACE REAL ESTATE JOURNEY
          </h2>

          <div className="flex gap-4 my-6">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
              Mission
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg">
              Vision
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg">
              Goal
            </button>
          </div>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2 mb-4">
            <span className="text-red-500 text-xl">✔</span>
            <p>Pellentesque sit amet sapien fringilla.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
            <span className="text-red-500 text-xl">✔</span>
            <p>Consectetur adipiscing elit Ut et massa.</p>
          </div>
        </div>
      </section>

      {/* section-2 */}

      <div className="py-12 bg-gray-100 text-center">
        <h2 className="text-red-500 text-sm font-semibold">OUR SERVICES</h2>
        <h1 className="text-3xl font-bold mt-2">
          TAKE A STROLL AROUND SURROUNDINGS.
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
                  <span className="text-3xl text-red-500">{service.icon}</span>
                </div>
              </div>
              <div className="relative h-32">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition-transform duration-700 group-hover:rotate-[360deg]">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="mt-3 text-red-500 font-semibold inline-block"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* section-3 */}

      <OurTeam />

      {/* section-4 */}

      <Testimonial/>

      {/* section-5 */}

      <Client />
    </>
  );
};

export default Page;

"use client";

import React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Online Broker",
      image: "/author-1.png",
      rating: 5,
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    },
    {
      name: "John Doe",
      role: "Real Estate Agent",
      image: "/author-2.png",
      rating: 4,
      review: "Vestibulum suscipit lorem non ex suscipit posuere...",
    },
    {
      name: "Sarah Smith",
      role: "Architect",
      image: "/author-1.png",
      rating: 5,
      review: "Pellentesque habitant morbi tristique senectus et netus...",
    },
  ];
  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <p className="text-red-600 font-semibold flex items-center justify-center">{"// Client Feedback"}</p>
        <h2 className="text-5xl font-bold text-center mb-6 mt-4">
          OUR HAPPY CLIENTS 
          <br />TESTIMONIALS
        </h2>
        <Carousel className="relative">
          <CarouselContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-full h-40 bg-gradient-to-b from-orange-200 to-white flex justify-center items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-gray-600">{testimonial.review}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;

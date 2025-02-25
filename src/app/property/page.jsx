import Prop from '@/components/prop'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'

const Page = () => {
  return (
    <div>
    {/* banner */}
                  <div className=" relative bg-blue-100 py-16 md:py-20 flex flex-col items-center text-center w-full">
                    {/* Background Overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{ backgroundImage: "url('/pattern.png')" }}
                    ></div>
            
                    {/* Content */}
                    <div className="relative z-10 px-4 md:px-8">
                      <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Contact
                      </h1>
                      <Breadcrumb className="mt-6">
                        <BreadcrumbList className="text-gray-600 text-sm md:text-base mt-2">
                          <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbPage>About Us</BreadcrumbPage>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbPage>Property</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                      </Breadcrumb>
                    </div>
                  </div>

                  {/* section */}
      <Prop/>
    </div>
  )
}

export default Page

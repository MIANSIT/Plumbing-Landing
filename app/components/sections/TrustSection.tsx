"use client"

import Image from "next/image";
import TrustCustomerReview from "../ui/TrustCustomerReviwe";
import { Reviewdata } from "../data/Reviewdata";

export default function TrustSection(){
    return(
        <div  id="Reviews" className="flex flex-col items-center justify-center  bg-[linear-gradient(180deg,#e0f7ff_0%,#7dd3fc_50%,#38bdf8_100%)] w-full overflow-hidden py-10" >

            <div>
                <h1 className="font-david py-5 lg:py-5 font-bold text-2xl lg:text-4xl text-blue-900  text-center">Our Customers</h1>
            </div>
            <div className="w-full overflow-hidden">
                 <div className=" slide-left  flex flex-row justify-items-center gap-5 ">
                {Reviewdata.map((info)=>(
                <TrustCustomerReview
                        key={info.id}
                        name={info.name} 
                        star={info.star} 
                        review={info.review}
                        date={info.date}
                        />
                ))}

            </div>
            </div>
           

           

        </div>
    );
}
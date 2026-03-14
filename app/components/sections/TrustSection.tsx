"use client"

import Image from "next/image";
import TrustCustomerReview from "../ui/TrustCustomerReviwe";
import { Reviewdata } from "../data/Reviewdata";

export default function TrustSection(){
    return(
        <div className="flex flex-col items-center justify-center w-full overflow-hidden" >

            <div>
                <h1 className="font-david py-5 lg:py-5 font-bold text-xl lg:text-3xl text-black  text-center">Our Customers</h1>
            </div>
            <div className="w-full overflow-hidden">
                 <div className=" slide-right  flex flex-row justify-items-center gap-5 ">
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
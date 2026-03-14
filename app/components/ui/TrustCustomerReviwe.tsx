"use client"

import Image from "next/image";

interface ReviewProps{
    name:string;
    star:string;
    review:string;
    date:string;

}

export default function TrustCustomerReview({name,star,review,date}:ReviewProps){
    return(
        <div className="flex flex-col items-center justify-center bg-cyan-100 w-40 md:w-60 lg:w-[320px]  py-2 md:py-5 gap-5 rounded-b-2xl rounded-t-2xl">
          <div className="flex flex-col  lg:flex-row  items-center   justify-between w-full px-3 lg:px-5 ">
            
            <div className="relative  w-22 h-20 lg:w-22 lg:h-22">
                <Image
                  src={star}
                  alt="review star"
                  fill
                  className="object-contain"/>
            </div>
            
            <div className="  text-sm  font-['Inter']">
                {date}
            </div>
            
          </div>
          

          <div className="text-sm lg:text-md font-mono px-5">
            "{review}"
         </div>
         <div className="flex flex-row  gap-2 lg:gap-7">
            <div className="h-px  w-12 lg:w-15 bg-emerald-800 m-auto" />
            <div className="text-md lg:text-lg font-['Inter']">
                {name}
            </div>
             <div className="h-px  w-7 lg:w-15 bg-emerald-800 m-auto" />
         </div>
            

            
        </div>
    );
}
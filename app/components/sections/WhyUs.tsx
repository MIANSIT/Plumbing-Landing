"use client"
import Image from "next/image";
import {Button} from 'antd';
import WhyUsCard from "../ui/WhyUsCard";
import { WhyUsdata } from "../data/WhyUsdata";


export default function WhyUs(){
    return(
        <div id="WhyUs" className=" bg-blue-300 w-full  justify-items-center">

            <div>
                <h1 className="font-david py-5 lg:py-5 font-bold text-2xl lg:text-4xl text-blue-900  text-center">Why Choose Us?</h1>
            </div>
             <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-10    w-full lg:w-[70%]">
            
                {WhyUsdata.map((info)=>(
                  <WhyUsCard
                        key={info.id}
                        icon={info.icon}
                        heading={info.heading}
                        details={info.deatils}  /> )
                )}
        
        
        </div>
        </div>

       
    );
}
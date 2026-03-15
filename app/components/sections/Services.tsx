"use client"
import Image from "next/image";
import {Button} from 'antd';
import ServiceCard from "../ui/ServicesCard";
import { Servicedata } from "../data/Servicedata";


export default function Services(){
    return(

        <div id="Services" className="flex flex-col py-10  bg-blue-50">

                <div>
                <h1 className="font-david py-5 lg:py-5 font-bold text-2xl lg:text-4xl text-black  text-center">Services We Provide</h1>
            </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">

            
           

            
                {Servicedata.map((info)=>(
                  <ServiceCard
                        key={info.id}
                        icon={info.icon}
                        heading={info.heading} 
                        details={info.deatils} 
                        more={info.more}/>
                )
                )}
        
        
        </div>
        </div>

     
    );
}
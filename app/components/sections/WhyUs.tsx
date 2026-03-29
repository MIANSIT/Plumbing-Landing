"use client"
import Image from "next/image";
import {Button} from 'antd';
import WhyUsCard from "../ui/WhyUsCard";
import { WhyUsdata } from "../data/WhyUsdata";

export default function WhyUs(){
    return(
        <div id="WhyUs" className="bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_50%,#06b6d4_100%)] w-full justify-items-center relative overflow-hidden">
            
            {/* Modern decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 w-full">
                <div className="text-center pt-10 lg:pt-16">
                   
                    <h1 className="font-david font-bold text-3xl lg:text-5xl bg-linear-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent text-center">
                        Why Choose Us?
                    </h1>
                    <div className="flex justify-center gap-2 mt-6">
                        <div className="w-12 h-1 bg-linear-to-r from-cyan-400 to-transparent rounded-full"></div>
                        <div className="w-12 h-1 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"></div>
                        <div className="w-12 h-1 bg-linear-to-l from-blue-400 to-transparent rounded-full"></div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-8 lg:p-12 w-full lg:w-[85%] mx-auto">
                    {WhyUsdata.map((info, index) => (
                        <div key={info.id} className="animate-slideIn" style={{animationDelay: `${index * 0.1}s`}}>
                            <WhyUsCard
                                key={info.id}
                                icon={info.icon}
                                heading={info.heading}
                                details={info.deatils}  
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
import Image from "next/image";
import { Button } from "antd";

interface Cardprops{
    icon:string;
    details:string;
    heading:string;
}

export default function WhyUsCard({icon,heading,details}:Cardprops){
    return(
        <div className="group flex flex-col md:flex-row bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center gap-4 p-4 md:p-6 lg:p-3 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 text-left rounded-2xl hover:bg-white/20 h-full">
            
            <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 shrink-0">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Image
                    src={icon}
                    alt="icon"
                    fill
                    className="object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            
            <div className="flex flex-col px-2 md:px-4 text-center md:text-left flex-1">
                <div className="text-white font-bold font-david text-base md:text-lg lg:text-xl group-hover:text-cyan-200 transition-colors duration-300">
                   {heading}
                </div>
            
                <div className="text-gray-200 text-xs md:text-sm lg:text-base mt-1 md:mt-2 leading-relaxed">
                   {details}
                </div>
            </div>
            
            {/* Modern accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16"></div>
        </div>
    );
}
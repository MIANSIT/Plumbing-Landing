import Image from "next/image";
import { Button } from "antd";

interface Cardprops{
    icon:string;
    details:string;
    heading:string;
  
}

export default function WhyUsCard({icon,heading,details}:Cardprops){

    return(
        <div className=" slide-in  flex  flex-col md:flex-row bg-blue-200  items-center justify-center gap-3  p-3   shadow-md hover:bg-blue-900 hover:-translate-y-2 transition-all duration-300 text-left  rounded-[10px_80px_80px_80px]">

            <div className= "relative w-15 h-15 md:w-20 md:h-20 ">
                <Image
                    src={icon}
                    alt="icon"
                    fill
                    className="object-contain"
                    />
            </div>
            <div className="flex flex-col px-10">
                <div className="text-emerald-900 font-bold font-david text-md md:text-xl ">
                   {heading}
                </div>
            
                <div className="text-gray-900  text-xs md:text-md ">
                   {details}
                </div>
            </div>   
        </div>
    );
}
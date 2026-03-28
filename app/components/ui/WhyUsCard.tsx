import Image from "next/image";
import { Button } from "antd";

interface Cardprops{
    icon:string;
    details:string;
    heading:string;
  
}

export default function WhyUsCard({icon,heading,details}:Cardprops){

    return(
        <div className=" slide-in  flex flex-row bg-sky-700 items-center justify-between gap-7 p-5   shadow-md hover:bg-blue-900 hover:-translate-y-2 transition-all duration-300 text-left  rounded-[10px_100px_100px_100px]">

            <div className= "relative w-20 h-20 ">
                <Image
                    src={icon}
                    alt="icon"
                    fill
                    className="object-contain"
                    />
            </div>
            <div className="flex flex-col">
                <div className="text-red-200 font-bold font-david text-xl ">
                   {heading}
                </div>
            
                <div className="text-gray-900 text-md ">
                   {details}
                </div>
            </div>   
        </div>
    );
}
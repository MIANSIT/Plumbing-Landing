import Image from "next/image";
import { Button } from "antd";

interface Cardprops{
    icon:string;
    details:string;
    heading:string;
  
}

export default function WhyUsCard({icon,heading,details}:Cardprops){

    return(
        <div className=" slide-in flex flex-row bg-sky-600 items-center justify-between gap-7 p-5  rounded-xl shadow-md hover:bg-blue-900 hover:-translate-y-2 transition-all duration-300 text-left ">

            <div className= "relative w-26 h-36 ">
                <Image
                    src={icon}
                    alt="icon"
                    fill
                    className="object-contain"
                    />
            </div>
            <div className="flex flex-col">
                <div className="text-red-200 font-bold text-xl ">
                   {heading}
                </div>
            
                <div className="text-gray-900 text-md ">
                   {details}
                </div>
            </div>
             

           
        </div>
    );
}
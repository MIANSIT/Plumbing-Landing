import Image from "next/image";
import { Button } from "antd";

interface Cardprops{
    icon:string;
    heading:string;
    details:string;
    more:string;
}

export default function ServiceCard({icon,heading,details,more}:Cardprops){

    return(
        <div className=" slide-in flex flex-col items-center gap-5 p-5 bg-transparent rounded-xl shadow-md hover:bg-blue-200 hover:-translate-y-2 transition-all duration-300 text-left">

            <div className= "relative w-16 h-16 ">
                <Image
                    src={icon}
                    alt="icon"
                    fill
                    className="object-contain"
                    />
            </div>
            <div className=" drop-inHeading text-2xl text-blue-700 font-['Inter'] ">
                {heading}
            </div>
            <div className="text-gray-600 text-sm ">
                {details}
            </div>
            <div className=" drop-inButton text-blue-600 font-medium cursor-pointer hover:underline">
                <Button
                type="primary"
                size="large"
                className="bg-red-400! text-white px-8 py-4">{more}</Button>
               
            </div>
        </div>
    );
}
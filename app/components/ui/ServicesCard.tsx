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
        <div className="group relative h-64 slide-in flex flex-col items-center justify-center p-5 shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 rounded-[40px_40px_40px_40px]">

          <Image
                src={icon}
                alt="icon"
                fill
                className="object-cover opacity-90"
            />

           
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-blue-200/80 opacity-0 transition-all duration-300 group-hover:opacity-100 text-center p-4 ">
                
                <div className="drop-inHeading text-3xl text-blue-900 font-['Inter']">
                    {heading}
                </div>

                <div className="drop-inButton text-blue-600 font-medium cursor-pointer">
                    <Button
                        href="tel:01793229730"
                        type="primary"
                        size="large"
                        className="bg-red-500! text-white px-8 py-4"
                    >
                        {more}
                    </Button>
                </div>
            </div>

        </div>
    );
}
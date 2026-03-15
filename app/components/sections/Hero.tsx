import Image from "next/image";
import {Button} from 'antd';

export default function Hero(){
    return(
        <div id="Hero" className="flex flex-col w-full bg-blue-100 items-center">
            <div className="flex flex-col py-10 gap-5 items-center justify-center">
                <h1 className="font-david py-2 lg:py-2 font-bold text-xl lg:text-2xl text-black  text-center">Emergency  <span className="text-xl text-red-600 font-mono "> 24/7 </span>plumbing service at your door</h1>
                <p className="font-david   font-bold text-xl lg:text-2xl text-black  text-center"><span className="text-xl lg:text-2xl text-red-600 font-mono">24</span> Hours Service</p>
                <p className="font-david   font-bold text-xl lg:text-2xl text-black  text-center"> <span className="text-xl text-red-600 font-mono">30-60</span> Minutes Arrival Time</p>
                
                    <Button type="primary" 
                      size="large"
                      href="tel:01793229730"
                      className="bg-orange-700! w-full h-15! text-4xl! text-white ">
                        01-0100-101
                    </Button>
                    
                
            </div>


            <div  className="items-center justify-center" >
                <div className="flex flex-row py-4 px-10 gap-3">
                    <span className=" items-center rounded-md bg-blue-300 px-3 py-1 text-md font-serif">Licensed</span>
                    <span className=" items-center rounded-md bg-blue-300 px-3 py-1 text-md font-serif">Insured</span>
                    <span className=" items-center rounded-md bg-blue-300  px-3 py-1 text-md font-serif">20+ years</span>
                </div>

                <div className="flex flex-row py-4 px-10 gap-3">
                    <span className="items-center rounded-md bg-blue-300 px-3 py-1 text-md font-serif">erving Fresno</span>
                    <span className="items-center rounded-md bg-blue-300 px-3 py-1 text-md font-serif">CA</span>
                    <span className=" items-center rounded-m bg-blue-300  px-3 py-1 text-md font-serif ">Badge</span>
                </div>
                <h1></h1>

            </div>

        </div>

    );
}
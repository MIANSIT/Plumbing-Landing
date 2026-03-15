import Image from "next/image";
import {Button} from 'antd';

export default function Hero(){
    return(
        <div id="Hero" className="flex flex-col w-full bg-blue-100 items-center">
            <div className="flex flex-col py-10 gap-5 items-center justify-center">
                <h1 className="font-david py-2 lg:py-2 font-bold text-xl lg:text-2xl text-blue-900  text-center">Emergency  <span className="text-xl text-red-600 font-mono "> 24/7 </span>plumbing service at your door</h1>
                <p className="font-david   font-bold text-xl lg:text-2xl text-blue-900  text-center"><span className="text-xl lg:text-2xl text-red-600 font-mono">24</span> Hours Service</p>
                <p className="font-david   font-bold text-xl lg:text-2xl text-blue-900  text-center"> <span className="text-xl text-red-600 font-mono">30-60</span> Minutes Arrival Time</p>
                
                    <Button type="primary" 
                      size="large"
                      href="tel:01793229730"
                      className="bg-orange-700!  w-[70%] md:w-full h-15!  text-3xl! md:text-4xl! text-white ">
                        01-0100-101
                    </Button>
                    
                
            </div>

            <div className="flex flex-wrap items-center py-4 px-6 md:px-10 gap-3">
               <span className="rounded-full bg-blue-300 px-4 py-2 text-sm md:text-base font-serif text-blue-900 shadow-sm">
                 Licensed
               </span>
               <span className="rounded-full bg-blue-300 px-4 py-2 text-sm md:text-base font-serif text-blue-900 shadow-sm">
                 Insured
               </span>
               <span className="rounded-full bg-blue-300 px-4 py-2 text-sm md:text-base font-serif text-blue-900 shadow-sm">
                 20+ years
               </span>
            </div>
            
            <div className="flex flex-wrap items-center py-4 px-6 md:px-10 gap-3">
               <span className="rounded-full bg-blue-300 px-4 py-2 text-sm md:text-base font-serif text-blue-900 shadow-sm">
                 Serving Fresno
               </span>
               <span className="rounded-full bg-blue-300 px-4 py-2 text-sm md:text-base font-serif text-blue-900 shadow-sm">
                 CA
               </span>
               <span className="rounded-full bg-blue-300 px-4 py-2 text-sm md:text-base font-serif text-blue-900 shadow-sm">
                 Badge
               </span>
            </div>

        </div>

    );
}
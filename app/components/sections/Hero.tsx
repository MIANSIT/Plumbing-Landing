import Image from "next/image";
import {Button} from 'antd';

export default function Hero(){
    return(
     <div id="Hero" className="relative flex flex-col bg-[url('/HeroBG.png')] bg-cover bg-center h-screen items-center pt-20 ">
         
         <div className="absolute inset-0 bg-black/40"></div>
         <div className="relative flex flex-col py-10 gap-5 items-center justify-center z-10">
           <h1 className="font-david py-2 lg:py-2 font-bold text-xl md:text-2xl lg:text-4xl text-white text-center">
             Emergency <span className="text-xl lg:text-2xl text-red-600 font-mono">24/7</span> plumbing service at your door
           </h1>
       
           <p className="font-david font-bold text-xl md:text-2xl lg:text-4xl text-white text-center">
             <span className="text-xl lg:text-2xl text-red-600 font-mono">24</span> Hours Service
           </p>
       
           <p className="font-david font-bold text-xl md:text-2xl lg:text-4xl text-white text-center">
             <span className="text-xl lg:text-2xl text-red-600 font-mono">30-60</span> Minutes Arrival Time
           </p>
       </div>
       


            <div className="flex flex-wrap items-center py-4 px-6 md:px-10 gap-3">
               <span className="rounded-full bg-blue-400 px-4 py-2 text-md md:text-lg font-serif text-blue-900 shadow-sm">
                 Licensed
               </span>
               <span className="rounded-full bg-blue-400 px-4 py-2 text-md md:text-lg font-serif text-blue-900 shadow-sm">
                 Insured
               </span>
               <span className="rounded-full bg-blue-400 px-4 py-2 text-md md:text-lg font-serif text-blue-900 shadow-sm">
                 20+ years
               </span>
            </div>
            
            <div className="flex flex-wrap items-center py-4 px-6 md:px-10 gap-3">
               <span className="rounded-full bg-blue-400 px-4 py-2 text-md md:text-lg font-serif text-blue-900 shadow-sm">
                 Serving Fresno
               </span>
               <span className="rounded-full bg-blue-400 px-4 py-2 text-md md:text-lg font-serif text-blue-900 shadow-sm">
                 CA
               </span>
               <span className="rounded-full bg-blue-400 px-4 py-2 text-md md:text-lg font-serif text-blue-900 shadow-sm">
                 Badge
               </span>
            </div>

        </div>

    );
}
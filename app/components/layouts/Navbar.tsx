"use client"
import Image from "next/image";
import { Button } from "antd";
import Hamburgermenu from "../ui/HamburgerMenu";

export default function Navbar(){
    return (
        <div className="flex flex-row w-full items-center justify-between px-5 py-5 bg-white">
            <div className="flex flex-row items-center">
                <Image src="/Navbar.png" alt=" Main Logo" width={"60"} height={"60"}/>
                <h1  className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-blue-900  text-center">Need Plumber</h1>
            </div>
            <div className=" hidden lg:flex items-center  font-['Inter'] text-black md:space-x-3 lg:space-x-6 xl:space-x-10">
               <button className="text-lg">Services</button>
               <button className="text-lg">Review</button>
               <button className="text-lg">About</button>
               <button className="text-lg">Contact</button>
            </div>
            <div className="block lg:hidden ">
                <Hamburgermenu/>
            </div>

        
            <div className="hidden lg:flex">
                <Button
                href="tel:01793229730"
                type="primary"
                size="large"
                 className="bg-orange-700! text-white ">
                    Call Now
                 </Button>

            </div>
        </div>
    );
    
}
import Image from "next/image";
import { Button } from "antd";

export default function Navbar(){
    return (
        <div className="flex flex-row w-full items-center justify-between px-5 py-10 bg-white">
            <div className="flex flex-row items-center">
                <Image src="/NavbarLogo.png" alt=" Main Logo" width={"50"} height={"50"}/>
                <h1 className="text-2xl">Need Plumber</h1>
            </div>
            <div className="flex items-center  font-['Inter'] text-black md:space-x-3 lg:space-x-6 xl:space-x-10">
               <button className="text-lg">Services</button>
               <button className="text-lg">Review</button>
               <button className="text-lg">About</button>
               <button className="text-lg">Contact</button>
            </div>

        
            <div>
                <Button
                type="primary"
                size="large"
                 className="bg-orange-700! text-white ">
                    Call Now
                 </Button>

            </div>
        </div>
    );
    
}
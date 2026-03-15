"use client"

import Image from "next/image";
import GalleryUi from "../ui/GalleryUi";
import { Gallerydata } from "../data/Gallerydata";

export default function Gallery(){
    return(
        <div  id="Gallery" className="flex flex-col items-center justify-center w-full overflow-hidden" >

            <div>
                <h1 className="font-david py-5 lg:py-5 font-bold text-xl lg:text-3xl text-black  text-center">Our Previous Work</h1>
            </div>
            <div className="w-full overflow-hidden">
                 <div className=" flex flex-row justify-items-center gap-5 ">
                {Gallerydata.map((info)=>(
                <GalleryUi
                        key={info.id}
                        before={info.before}
                        after={info.after} 
                        name={info.name} 
                        review={info.review}                        
                        />
                ))}

            </div>
            </div>
           

           

        </div>
    );
}
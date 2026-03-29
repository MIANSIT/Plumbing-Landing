"use client"

import GalleryUi from "../ui/GalleryUi";
import { Gallerydata } from "../data/Gallerydata";

export default function Gallery(){
    return(
        <div id="Gallery" className="flex flex-col bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 items-center justify-center w-full overflow-hidden relative">
            
            {/* Modern animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full">
                <div>
                    <h1 className="font-david py-5 lg:py-5 font-bold text-3xl lg:text-4xl bg-linear-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent text-center">
                        Our Previous Work
                    </h1>
                </div>
                <div className="slide-right w-full overflow-hidden">
                    <div className="flex flex-row justify-items-center gap-5">
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
        </div>
    );
}
"use client";

import Image from "next/image";

interface ReviewProps {
  before: string;
  after: string;
  name: string;
  review: string;
}

export default function GalleryUi({ before, after, name, review }: ReviewProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full  bg-gray-100 gap-3 py-6 px-3">
      
     
      <div className="flex flex-col items-center">
        <h1 className="font-mono font-bold text-lg text-blue-500">Before</h1>
       <div className="group relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[70px_20px_70px_20px] overflow-hidden">
         <Image
           src={before}
           alt="before pic"
           fill
           className="object-cover"
         />
      </div>
      </div>


      <div className="flex flex-col items-center ">
        <h1 className=" font-mono font-bold text-lg">After</h1>
      
        <div className="group relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[20px_70px_20px_70px] overflow-hidden">
          <Image
            src={after}
            alt="after pic"
            fill
            className="object-cover "
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm mt-2">"{review}"</p>
          </div>

        </div>
      </div>

    </div>
  );
}
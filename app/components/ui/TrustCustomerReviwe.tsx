"use client"

import Image from "next/image";

interface ReviewProps {
  name: string;
  star: string;
  review: string;
  date: string;
}

export default function TrustCustomerReview({ name, star, review, date }: ReviewProps) {
  return (
    <div className="
      flex-shrink-0
      flex flex-col gap-4
      w-72 md:w-80
      bg-white rounded-2xl p-6
      shadow-md hover:shadow-xl hover:shadow-blue-900/10
      border border-gray-100
      hover:-translate-y-1
      transition-all duration-300
    ">
      {/* Top row: stars + date */}
      <div className="flex items-center justify-between">
        <div className="relative w-24 h-5">
          <Image src={star} alt="rating stars" fill className="object-contain object-left" />
        </div>
        <span className="text-xs text-gray-400 font-medium">{date}</span>
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        "{review}"
      </p>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Reviewer name */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-400">Verified Customer</p>
        </div>

        {/* Google icon */}
        <div className="ml-auto">
          <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
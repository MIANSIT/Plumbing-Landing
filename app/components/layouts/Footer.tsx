import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative flex flex-col text-center items-start justify-center py-10 *:px-10 lg:px-20 w-full mx-auto bg-blue-900">
      
      <div className="flex  flex-col lg:flex-row  gap-10">
        <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start text-center md:text-left gap-7">
          
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center md:justify-start gap-1">
              <Image src="/Navbar.png" alt="Main Logo" width={50} height={50} className="object-cover"/>
              <h1 className="font-sans font-bold text-md md:text-xl lg:text-2xl text-amber-200 text-center">
                Need Plumber
              </h1>
            </div>

            <p className="text-sm lg:text-lg text-amber-100 font-['Inter']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore .
                <a href="http://localhost:3000/" className="underline hover:text-blue-600 transition-colors">
                  Learn more
                </a>
            </p>
          </div>
        </div>

       
        <div className="flex flex-col items-center md:items-start gap-5 w-full py-3">
          <h1 className="text-sm md:text-xl font-bold text-amber-100 py-2">
            How to Get Us
          </h1>

          <ul className="text-sm md:text-md list-none space-y-2 text-amber-100">
            
            <li className="flex flex-row gap-2 justify-center md:justify-start">
              <Image
                src="/mapicon.png"
                alt="map icon"
                width={35}
                height={30}
                className="object-contain inline-block invert w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
              <span>Linsedt,23/234, London ,Dhaka</span>
            </li>

          
            <li className="flex flex-row gap-2 justify-center md:justify-start">
              <Image src="/phoneicon.png"alt="phone icon" width={35} height={30}
                className="object-contain inline-block invert w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
              <a href="tel:+8801010101010" className="hover:text-amber-300 transition"> +880 1010 101010
              </a>
            </li>

            <li className="flex flex-row gap-2 justify-center md:justify-start">
              <Image
                src="/mailicon.png"
                alt="mail icon"
                width={35}
                height={30}
                className="object-contain inline-block invert w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
              <span>Linsedt@gmail.com</span>
            </li>
          </ul>
        </div>

        
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps?q=Dhaka&output=embed"
            className="w-full h-full rounded-xl border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

   
      <div className="flex flex-col-reverse md:flex-row pt-10 justify-between items-center gap-15 md:gap-50">
        <div className="text-xs text-amber-100">
          © 2022 Restaurants. All Right Reserved. Designed by Isaac
        </div>

        <div className="flex flex-row gap-4 lg:gap-10">
          <div className="text-xs text-amber-100">Terms of Service</div>
          <div className="text-xs text-amber-100">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
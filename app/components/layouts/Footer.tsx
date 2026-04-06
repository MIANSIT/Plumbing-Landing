import Image from "next/image";

export default function Footer() {
  return (
    <footer className='w-full bg-blue-900 px-5 py-10 lg:px-20'>
      <div className='mx-auto flex flex-col gap-10'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
          {/* Brand Section */}
          <div className='flex w-full flex-col gap-5 text-center md:text-left'>
            <div className='flex items-center justify-center gap-2 md:justify-start'>
              <Image
                src='/Navbar.png'
                alt='Need Plumber logo'
                width={50}
                height={50}
                className='object-cover'
              />
              <h1 className='text-md font-bold text-amber-200 md:text-xl lg:text-2xl'>
                Need Plumber
              </h1>
            </div>

            <p className="font-['Inter'] text-sm text-amber-100 lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
              <a
                href='/'
                className='ml-1 underline transition-colors hover:text-blue-300'
              >
                Learn more
              </a>
            </p>
          </div>

          {/* Contact Section */}
          <div className='flex w-full flex-col items-center gap-5 py-3 md:items-start'>
            <h2 className='py-2 text-sm font-bold text-amber-100 md:text-xl'>
              How to Get Us
            </h2>

            <ul className='space-y-3 text-sm text-amber-100 md:text-base'>
              <li className='flex items-center gap-2 justify-center md:justify-start'>
                <Image
                  src='/mapicon.png'
                  alt='Map icon'
                  width={35}
                  height={30}
                  className='h-6 w-6 object-contain invert sm:h-7 sm:w-7 md:h-8 md:w-8'
                />
                <span>Linsedt, 23/234, London, Dhaka</span>
              </li>

              <li className='flex items-center gap-2 justify-center md:justify-start'>
                <Image
                  src='/phoneicon.png'
                  alt='Phone icon'
                  width={35}
                  height={30}
                  className='h-6 w-6 object-contain invert sm:h-7 sm:w-7 md:h-8 md:w-8'
                />
                <a
                  href='tel:+8801010101010'
                  className='transition hover:text-amber-300'
                >
                  +880 1010 101010
                </a>
              </li>

              <li className='flex items-center gap-2 justify-center md:justify-start'>
                <Image
                  src='/mailicon.png'
                  alt='Mail icon'
                  width={35}
                  height={30}
                  className='h-6 w-6 object-contain invert sm:h-7 sm:w-7 md:h-8 md:w-8'
                />
                <a
                  href='mailto:Linsedt@gmail.com'
                  className='transition hover:text-amber-300'
                >
                  Linsedt@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className='w-full h-64 overflow-hidden rounded-xl'>
            <iframe
              src='https://www.google.com/maps?q=Dhaka&output=embed'
              title='Google Map showing Dhaka location'
              className='h-full w-full border-0'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col-reverse gap-6 border-t border-blue-800 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left'>
          <div className='text-xs text-amber-100'>
            © 2022 Need Plumber. All rights reserved. Designed by Isaac.
          </div>

          <div className='flex justify-center gap-4 lg:gap-10'>
            <a
              href='#'
              className='text-xs text-amber-100 transition hover:text-amber-300'
            >
              Terms of Service
            </a>
            <a
              href='#'
              className='text-xs text-amber-100 transition hover:text-amber-300'
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

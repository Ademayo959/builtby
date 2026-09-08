import Image from "next/image";
import bg from '@/assets/bg.png'
import site1 from '@/assets/site1.png'
import site2 from '@/assets/site2.png'
import site3 from '@/assets/site3.png'
import site4 from '@/assets/site4.png'
import site5 from '@/assets/site5.png'

export default function Home() {
  return (
    <div className="relative overflow-hidden h-full font-bricolageGrotesque">
      <Image src={bg} priority alt="" className="absolute inset-0 h-full object-cover object-top w-full -z-10" />
      <div className="relative z-10 h-full">
        {/*wNavbar :)*/}
        <section className="max-w-7xl mx-auto flex items-center justify-between my-6 bg-white px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]">
          <div className="bg-white py-1.5 px-4 flex items-center w-fit h-fit rounded-full gap-2 ">
            <div className="h-4 w-4 bg-green-400 flex items-center justify-center rounded-full">
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="font-bricolageGrotesque font-semibold text-[0.9rem]">available for projects</p>
          </div>
          <div className="bg-white py-1.5 px-4 flex items-center justify-between h-fit rounded-full gap-2 w-lg ">
            <p className="font-bricolageGrotesque font-semibold text-[1.2rem]">Olúwàmâyõwá</p>
            <p className="font-bricolageGrotesque font-semibold text-[1.1rem]">About</p>
            <p className="font-bricolageGrotesque font-semibold text-[1.1rem]">Contact</p>
            <p className="font-bricolageGrotesque font-semibold text-[1.1rem]">Works</p>
          </div>
          <div className="flex items-center bg-white py-1.5 px-4 flex items-center w-fit h-fit rounded-full gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 hover:scale-110">
              <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
              <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
            </svg>
            <p>ademayo234@gmail.com</p>
          </div>
        </section>
        {/*Hero */}
        <div className="text-center mt-22">
          <div className="leading-15 justify-self-center text-center my-4">
            <p className="font-bold text-[4.2rem] tracking-tighter">Need a cool website?</p>
            <p className="font-bold text-[4.2rem] tracking-tighter">I've got you covered</p>
          </div>
          <p className="font-semibold text-[1.1rem]">Designing and building sites that wow visitors and win customers</p>
          <div className="bg-green-700 px-4 my-4 py-2.5 text-white rounded-full w-fit shadow-[3px_3px_0px_0px_rgba(0,70,0,1)] justify-self-center">
            <p className="font-bold">Book a Call</p>
          </div>
        </div>
        {/*Envelope section */}
        <div className="relative mx-auto mt-32 mb-20 h-[35rem] w-full max-w-4xl bg-white rounded-[2rem] shadow-xl">

          {/* 1. BACK PANEL STITCHING */}
          {/* inset-3 pulls the border inward by 0.75rem on all sides */}
          <div className="absolute inset-3 z-0 rounded-[1.5rem] border border-dashed border-black/30"></div>

          {/* 2. THE CONTENT (What goes inside the pouch) */}
          {/* Positioned behind the front pouch, pushed slightly up */}
          <div className="absolute inset-0 z-10 flex items-start justify-center pt-24">

            <div className="relative flex justify-center w-full">
              {/* Card 1: Tilted Left */}
              <Image
                src={site1}
                alt="Site 1"
                className="absolute w-fit h-78 object-contain rounded-xl border-4 border-white shadow-md 
                 -rotate-16 translate-x-16 -translate-y-8 origin-bottom 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-36 hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-2xl cursor-pointer"
              />

              {/* Card 2: Center */}
              <Image
                src={site2}
                alt="Site 2"
                className="absolute w-fit h-78 object-contain rounded-xl border-4 border-white shadow-md 
                 -rotate-4 translate-x-16 origin-bottom z-10
                 transition-all duration-300 ease-out 
                 hover:-translate-y-36 hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-2xl cursor-pointer"
              />

              {/* Card 3: Tilted Right */}
              <Image
                src={site3}
                alt="Site 3"
                className="absolute w-fit h-78 object-contain rounded-xl border-4 border-white shadow-md 
                 rotate-10 translate-x-28 origin-bottom 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-36 hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-2xl cursor-pointer"
              />

              <Image
                src={site4}
                alt="Site 4"
                className="absolute w-fit h-78 object-contain rounded-xl border-4 border-white shadow-md 
                 rotate-10 -translate-x-28 origin-bottom 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-36 hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-2xl cursor-pointer"
              />

              <Image
                src={site5}
                alt="Site 5"
                className="absolute w-fit h-78 object-contain rounded-xl border-4 border-white shadow-md 
                 -rotate-10 translate-x-0 origin-bottom 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-36 hover:scale-110 hover:rotate-0 hover:z-30 hover:shadow-2xl cursor-pointer"
              />
            </div>

          </div>

          {/* 3. THE FRONT POUCH */}
          {/* Absolutely positioned at the bottom, covers the bottom half */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-[16rem] rounded-b-[2rem] shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.15)] bg-white bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:24px_24px]">

            {/* Front Pouch Stitching */}
            {/* Notice border-t-0 removes the top dashed line so it looks like an open pocket */}
            <div className="absolute inset-3 top-4 rounded-b-[1.25rem] border border-t border-dashed border-black/40"></div>

          </div>
        </div>
      </div>
    </div>
  );
}

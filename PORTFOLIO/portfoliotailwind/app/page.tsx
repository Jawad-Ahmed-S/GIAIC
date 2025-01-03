"use client";
import Typed from 'typed.js';
import Image from "next/image";
import Navbar from "./Components/navbar/Navbar";
import React from 'react';
import Link from 'next/link';
export default function Home() {
  const el = React.useRef(null);
                
  React.useEffect(() => {//text animation
    const typed = new Typed(el.current, {
      strings: ['Graphic Designer', ' Programmer', 'Web Developer'],
      typeSpeed: 100,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);

   return (
    <div className="flex bg-[rgb(238,255,246)] max-h-screen">
      <Navbar />
      <div className="flex ml-[25vw] w-[75vw] h-screen bg-gradient-to-br from-white to-[rgba(255,68,0,0.062)]">
        <div className="flex flex-row items-center ml-[1em] mr-[1em] justify-between w-full max-lg:flex-col-reverse max-lg:items-center">
          <div className="font-sans text-xl w-[45vw] flex justify-center items-center m-16 max-lg:w-full">
            <div>
              <h1 className="min-h-[5em] text-3xl font-bold min-w-[7em]">
                Hello, my name is{' '}
                <span className="font-['Style_Script'] text-orange-600">
                  Jawad Ahmed
                </span>
                <br />
                I am a{' '}
                <span ref={el} className="text-orange-600">
                  
                </span>
              </h1>
              
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a possimus fugit deleniti porro animi ullam quas aspernatur, eum quo delectus autem perspiciatis voluptatum obcaecati itaque accusantium aperiam vel sint officia fugiat at ea numquam? Dolore quos aut, ab similique autem repellendus ipsa harum exercitationem?
              </p>

              <a href="../../About" className="inline-block">
                <button className="mt-5 py-3 px-3 w-[20vh] rounded-3xl text-lg border-none bg-orange-600 text-gray-100 transition-all duration-300 ease-in-out 
                  hover:bg-[rgb(226,61,1)] hover:w-[25vh] hover:cursor-pointer 
                  active:bg-[rgb(191,56,6)] active:w-[25vh] active:shadow-inner">
                  About Me
                </button>
              </a>
            </div>
          </div>

          <div className="w-60 flex justify-center items-center max-lg:mb-8">
            <img 
              src="/image/profile.png" 
              alt="Profile Picture" 
              className="w-[200px] h-[200px] shadow-[0_0_8px_1px_rgba(0,0,0,0.158)]  
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-[0_0_12px_2px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
import Navbar from "@/app/Components/navbar/Navbar"
import object from "./data"
import Link from "next/link";

export default function About() {
    return (
      <div className="flex">
        <Navbar />
        <div className="flex flex-col min-h-screen w-[75vw] bg-gradient-to-br from-white to-[rgba(255,68,0,0.062)] ml-[25vw]">
          <div className="w-full text-center font-['Style Script',cursive]">
            <h1 className="p-4 text-[orangered]  text-3xl font-['Style_Script'] font-bold">Portfolio</h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-center w-full">
            {object.map((item, index) => (
              <Link href={item.href} key={index} className="flex-1 max-w-[20em] h-[25em] flex items-center justify-center text-center">
                <div className="w-[17em] h-[20em] bg-white rounded-lg shadow-md transition-all duration-300 ease-in hover:w-[18em] hover:h-[21em] overflow-hidden flex flex-col items-center">
                  <img src={item.src} alt="Portfolio Item" className="h-1/2 w-full shadow-inner" />
                  <div className="mt-8 h-1/4 max-w-[90%]">
                    <h2 className="text-2xl font-bold text-[orangered]">{item.Name}</h2>
                    <p className="text-base">{item.Description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

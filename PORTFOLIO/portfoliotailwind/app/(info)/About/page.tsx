// pages/about.js
"use client";
import Navbar from "@/app/Components/navbar/Navbar";
import Head from 'next/head'
import { 
  Code2,
  Terminal,
  Layout,
  Code2Icon,
  LucideAtom,
  GitBranchIcon,
  FileJson2
} from 'lucide-react'

export default function About(){
    return(
      <div className="min-h-screen bg-gradient-to-br from-white to-[rgba(255,68,0,0.062)] font-['Verdana',sans-serif]">
        <Head>
          <title>About Me</title>
        </Head>
        <div className="min-h-screen ml-[25vw] p-8">
          <Navbar />
          <div className="relative mb-20">
            <div className="relative z-10 text-[orangered] font-bold font-['Style_Script'] text-5xl mb-4">About Me</div>
            <p className="text-lg text-gray-800 leading-7 max-w-2xl">
              Hello! I'm a passionate Computer Science student with a keen interest in web development 
              and software engineering. I love turning complex problems into simple, beautiful, and 
              intuitive solutions. Currently exploring the vast world of technology and always eager 
              to learn something new.
            </p>
          </div>

          <section>
            <h2 className="text-[orangered] text-2xl mb-8 font-bold">Educational Journey</h2>
            <div className="relative pl-8 mb-20">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[orangered]"></div>

              <div className="relative mb-10 pb-4">
                <div className="absolute left-[-2.35rem] top-2 w-4 h-4 bg-[orangered] rounded-full border-4 border-white shadow-[0_0_0_2px_orangered]"></div>
                <div className="text-[orangered] text-sm mb-2">2024 - Present</div>
                <div className="font-bold text-lg mb-1">Bachelor in Computer Science</div>
                <div className="text-gray-500">FAST-NUCES,Karachi</div>
              </div>

              <div className="relative mb-10 pb-4">
                <div className="absolute left-[-2.35rem] top-2 w-4 h-4 bg-[orangered] rounded-full border-4 border-white shadow-[0_0_0_2px_orangered]"></div>
                <div className="text-[orangered] text-sm mb-2">2022 - 2024</div>
                <div className="font-bold text-lg mb-1">Intermediate</div>
                <div className="text-gray-500">Army Public School & College</div>
              </div>
              <div className="relative mb-10 pb-4">
                <div className="absolute left-[-2.35rem] top-2 w-4 h-4 bg-[orangered] rounded-full border-4 border-white shadow-[0_0_0_2px_orangered]"></div>
                <div className="text-[orangered] text-sm mb-2">2020 - 2022</div>
                <div className="font-bold text-lg mb-1">Matriculation</div>
                <div className="text-gray-500">Gallant Foundation School</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[orangered] text-2xl mb-8 font-bold">Skills & Technologies</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <Code2Icon className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">HTML5</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <Code2 className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">CSS3</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <FileJson2 className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">JavaScript</div>
              </div>
              {/* <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <LucideAtom className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">React</div>
              </div> */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <Terminal className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">C/C++</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <GitBranchIcon className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">Git</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <Layout className="text-[orangered] mb-3" size={32} />
                <div className="text-sm text-gray-700">Tailwind CSS</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}

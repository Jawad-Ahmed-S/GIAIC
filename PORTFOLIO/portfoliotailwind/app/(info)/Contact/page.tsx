import Navbar from "@/app/Components/navbar/Navbar"

export default function About() {
    return (
      <div className="flex font-['Verdana',sans-serif]">
        <Navbar />
        <div className="flex justify-center items-center w-[75vw] bg-gradient-to-br from-white to-[rgba(255,68,0,0.062)] min-h-screen ml-[25vw]">
          <div className="bg-white rounded-lg w-[80%] shadow-md flex flex-col justify-around items-center py-6">
            <h2 className="text-[orangered] font-bold font-['Style_Script'] text-3xl pb-6">Contact Us</h2>
            <form className="flex flex-col gap-6 w-[80%]">
              <input type="text" placeholder="Full Name" className="p-4 rounded-lg border border-gray-300" />
              <input type="email" placeholder="Email Address" className="p-4 rounded-lg border border-gray-300" />
              <input type="tel" placeholder="Phone Number" className="p-4 rounded-lg border border-gray-300" />
              <textarea placeholder="Message" className="p-4 rounded-lg border border-gray-300 font-['Verdana',sans-serif]"></textarea>
            </form>
          </div>
        </div>
      </div>
    );
}

import Link from "next/link";
export default function Navbar() {
    return (
        <div className="flex justify-center items-center w-screen h-[10vh] bg-[#1b252e] text-white font-sans">
            <div className="flex items-center justify-around  w-[80vw]">
               
                <div className="font-bold text-[1.6em] p-2">BlogSite.com</div>

               
                <ul className="flex space-x-6 list-none p-2">
                    <li className="text-[#f5f3e7] transition-all duration-200 ease-in-out hover:text-[#e08d79]">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-[#f5f3e7] transition-all duration-200 ease-in-out hover:text-[#e08d79]">
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

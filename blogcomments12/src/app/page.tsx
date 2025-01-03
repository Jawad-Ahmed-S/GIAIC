
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen p-5 bg-[rgb(248,248,248)]">
      <div className="p-8 flex flex-col justify-center text-center max-w-[800px] bg-white rounded-lg shadow-[0_0_8px_0.4px_rgba(83,83,83,0.142)] font-sans">
        
        <h1 className="m-5 text-3xl font-bold">Discover Mindful Living: Insights, Tips, and Inspiration</h1>
        
        <p className="m-5 text-[rgb(40,39,39)] text-justify text-lg">
          Welcome to BlogSite.com, where each moment matters. Dive into our blog to explore tips on mindful living, wellness, and personal growth. Whether you’re looking to reduce stress, improve focus, or bring more balance into your daily life, we have something for everyone.
        </p>
        
        <h3 className="m-5 text-xl font-semibold text-[rgb(180,89,89)]">
          Start your journey towards a more fulfilling life today!
        </h3>
        
        <Link href="./blog">
          <button className="bg-[brown] text-white outline-none border-none rounded-md px-6 py-3 text-xl hover:bg-[rgb(140,35,35)] active:bg-[rgb(100,36,36)] cursor-pointer">
            Read our Blog &#8594;
          </button>
        </Link>
        
      </div>
    </div>
  );
}

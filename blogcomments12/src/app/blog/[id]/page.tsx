import Image from "next/image";
import Navbar from "../../Components/Navbar";
import CommentSection from "../../Components/Comments";
import { client } from "@/src/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

// Types
interface ImageTypes {
  asset: {
    _ref?: string;
  };
  caption?: string;
}

interface BlogTypes {
  name: string;
  Published: string;
  Content: any[];
  poster: ImageTypes;
}

// Image URL Builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source as string);
}

// Async Params Type
type Params = { id: string };
type PageProps = {
  params: Promise<Params>; // Fixed: Params treated as a Promise
};
  
// Blog Component
export default async function Blog({ params }: PageProps) {
  const { id } = await params; // Fixed: Await params properly
  const blogIndex = parseInt(id, 10); // Ensure valid ID parsing

  const res: BlogTypes[] = await client.fetch(`*[_type == 'Blog']`);
  const blog = res[blogIndex];

  if (!blog) {
    throw new Error("Blog not found");
  }

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div
        className="flex items-center justify-center w-full h-[40vh] bg-cover bg-center text-white text-[2em] font-sans"
        style={{
          backgroundImage: `url(${urlFor(blog.poster?.asset?._ref)
            .width(1200)
            .height(600)
            .url()})`,
        }}
      >
        <h1 className="text-white">{blog.name}</h1>
      </div>
      <section className="w-[90vw] max-w-[1000px] flex flex-col my-5 mx-auto text-[#333] leading-relaxed font-sans">
        {blog.Content.map((block, BlogIndex) => {
          if (block._type === 'block' && block.style) {
            switch (block.style) {
              case 'h1':
                return (
                  <h1 key={BlogIndex} className="mb-8 font-bold text-[3rem] text-justify text-[#0b4d83]">
                    {block.children[0]?.text}
                  </h1>
                );
              case 'h2':
                return (
                  <h2 key={BlogIndex} className="mb-6 font-bold text-[2rem] text-justify text-[#0b4d83]">
                    {block.children[0]?.text}
                  </h2>
                );
              case 'h3':
                return (
                  <h3 key={BlogIndex} className="mb-4 font-bold text-2xl text-justify text-[#0b4d83]">
                    {block.children[0]?.text}
                  </h3>
                );
              default:
                return (
                  <p key={BlogIndex} className="mb-8 text-justify text-[#444]">
                    {block.children[0]?.text}
                  </p>
                );
            }
          }
          if (block._type === 'image') {
            return (
              <div key={BlogIndex} className="my-5">
                <Image
                  className="w-[100%] h-80 rounded-lg"
                  src={urlFor(block.asset._ref).width(1500).height(500).url()}
                  alt={block.caption || 'Blog Image'}
                  width={1500}
                  height={500}
                />
                {block.caption && <p className="text-center">{block.caption}</p>}
              </div>
            );
          }
          return null;
        })}
      </section>
      <CommentSection />
      <footer className="flex items-center justify-center w-full h-[10vh] bg-[#1b252e] text-white text-center">
        <p>All Rights Reserved &copy; BlogSite.com&trade;</p>
      </footer>
    </div>
  );
}

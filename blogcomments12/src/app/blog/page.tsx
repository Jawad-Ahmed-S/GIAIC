import Link from 'next/link';
import { client } from '../../sanity/lib/client';
import Navbar from '../Components/Navbar';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

// Image URL builder setup
const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

// Define TypeScript interfaces
interface ImageTypes {
  asset: {
    _ref?: string;
  };
}

interface BlogTypes {
  name: string;
  Published: string;
  poster: ImageTypes;
}

// Fetch and display blog listings
export default async function BlogListings() {
  const allblog: BlogTypes[] = await client.fetch(`*[_type == 'Blog']`);
  return (
    <div className='bg-[rgb(248,248,248)] min-h-screen'>
      <Navbar />
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {allblog.map((data, id) => (
          <Link key={id} href={`/blog/${id}`} className='block'>
            <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <Image 
                className="w-full h-56 object-cover"
                src={urlFor(data.poster.asset._ref).width(500).height(300).url()}
                alt={'Blog Image'}
                width={500}
                height={300}
              />
              <div className='p-4'>
                <h1 className='text-lg font-semibold text-gray-800'>{data.name}</h1>
                <p className='text-sm text-gray-500 mt-1'>{data.Published}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import ProductCard from "./Product";
import { ButtonGray } from "./button";
import Productinterface from "./Productinterface";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}


export default function ProductSlider() {
  const [productData, setProductData] = useState<Productinterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "Product"] {
          poster,
          productname,
          price,
          description,
          dimensions {
            height,
            width,
            depth
          }
        }
      `);
      setProductData(data);
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-[1440px] flex justify-center items-center mt-[5rem] mb-[5rem] px-4 overflow-x-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 w-full justify-evenly md:flex-row md:items-center overflow-x-auto">
          {productData.map((tile, index) => (
            <ProductCard
              key={index}
              imagePath={urlFor(tile.poster).url()}
              title={tile.productname}
              price={tile.Price}
              reference={index}
            />
          ))}
        </div>
        <Link href="/AllProduct"><ButtonGray className="m-auto">View More</ButtonGray></Link>
      </div>
    </section>
  );
}
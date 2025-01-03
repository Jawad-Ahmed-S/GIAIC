import ProductCard from "./Product";
import { ButtonGray } from "./button";
import "../Components/styles/hero.css"
import { useState,useEffect } from "react";
import Productinterface from "./Productinterface";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function AllProduct() {
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
    <section className="flex flex-col gap-5 justify-center items-center ">
        <div className="custom-bg w-full h-[12rem] flex items-end">
            <p className="headline-three text-white m-[2rem]">All Products</p>
        </div>
      <div className="w-[100%] flex flex-col justify-center mb-[5rem] items-center">
        <div className="grid grid-cols-1 gap-6 w-[90%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
        <ButtonGray className="mt-6">View More</ButtonGray>
      </div>
    </section>
  );
}

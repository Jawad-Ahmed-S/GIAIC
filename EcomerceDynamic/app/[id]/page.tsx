
import Header from "../Components/header";
import ServiceTile from "../Components/mainPage/serviceTile";
import { serviceTilesData, productData } from "../Info";
import JoinClub from "../Components/joinclub";
import ProductSlider from "../Components/ProductSlider";
import Footer from "../Components/footer";
import ProductSpecific from "../Components/ProductSpecific";
import ProductInterface from "../Components/Productinterface";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

type Params = { id: string };
type PageProps = {
  params: Params;
};

export default async function ProductListing({ params }: PageProps) {
  const prodIndex = parseInt(params.id, 10);

  const res = await client.fetch(`
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
  const product = res[prodIndex];

  return (
    <div className="bg-white h-full max-w-[1440px] sm:-w-[400px] m-auto">
      <Header />
      <ProductSpecific 
        poster={urlFor(product.poster).url()}
        productname={product.productname}
        Price={product.price}   
        description={product.description}
        Dimensions={product.dimensions}  
      />
      <h1 className="headline-three m-[5rem] text-custom-purple-dark">You May Also Like</h1>
      <ProductSlider />
      <section className="flex flex-col items-center justify-center ">
        <h1 className="headline-three text-custom-purple-dark m-[3rem]">What makes our brand different?</h1>
        <div className="flex flex-col gap-4 w-[90%] justify-evenly md:flex-row md:justify-center items-center">
          {serviceTilesData.map((tile, index) => (
            <ServiceTile
              key={index}
              Icon={tile.Icon}
              title={tile.title}
              description={tile.description}
            />
          ))}
        </div>
      </section>
      <JoinClub />
      <Footer />
    </div>
  );
}

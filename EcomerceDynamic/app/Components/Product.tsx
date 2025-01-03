import Link from "next/link";

interface ProductCardProps {
  imagePath: string;
  title: string;
  price: number;
  reference: number; 
}

export default function ProductCard({ imagePath, title, price, reference }: ProductCardProps) {
  if (!reference) {
    console.error('ProductCard - Missing reference:', title);
  }

  return (
    <Link href={`${reference}` || '#'}>
      <div className="bg-white md:w-[17rem] w-[100%]">
        <img src={imagePath} alt={title} className="w-full object-cover" />
        <div className="pt-4 pb-4">
          <h2 className="text-custom-purple-dark headline-five mb-[1px]">{title}</h2>
          <p className="text-custom-purple-dark headline-five">{price}</p>
        </div>
      </div>
    </Link>
  );
}

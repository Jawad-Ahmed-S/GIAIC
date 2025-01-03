import Link from "next/link";
import Countries from "./countries";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold m-5 ">Countries</h1>
      <ul className="flex bg-black text-white font-bold gap-5 items-center content-center p-3 justify-evenly">
        {GetCountryData()}
      </ul>
    </div>
  );
}

function GetCountryData() {
  return Object.keys(Countries).map((CountryKey) => (
    <li className=" hover:text-orange-600 transition-all ease-in-out duration-500"  key={CountryKey}>

      <Link href={`${CountryKey}`}>
        {Countries[CountryKey].name}
      </Link>

    </li>
  ));
}
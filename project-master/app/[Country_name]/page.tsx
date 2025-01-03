import Countries from "../countries";
import React from "react";

export default function CountryDetails({ params }: { params: { Country_name: string } }) {
  const { Country_name } = params;

  const country = Countries[Country_name as keyof typeof Countries];

  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}
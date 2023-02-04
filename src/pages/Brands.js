import { useLoaderData, Link } from "react-router-dom";

export default function Brands() {
  const brands = useLoaderData();

  return (
    <div>
      {brands.map((brands) => (
        <Link to="/" key={brands.id}>
          <li>{brands.name}</li>
        </Link>
      ))}
    </div>
  );
}

//loader function
export const brandsLoader = async () => {
  const res = await fetch("http://localhost:4000/brands");

  return res.json();
};

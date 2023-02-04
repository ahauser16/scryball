import { useLoaderData, Link } from "react-router-dom";

export default function BaseSet() {
  const baseset = useLoaderData();

  return (
    <div className="baseset">
      {baseset.map((player) => (
        <Link to={player.cardId.toString()} key={player.cardId}>
          <li>{player.name}</li>
        </Link>
      ))}
    </div>
  );
}

//loader function
export const BaseSetLoader = async () => {
  const res = await fetch("http://localhost:4000/BaseSet");

  return res.json();
};

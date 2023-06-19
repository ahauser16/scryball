import { useLoaderData, Link } from "react-router-dom";
import styled from "styled-components";


export default function BaseSet() {
  const baseset = useLoaderData();

  return (
    <div className="baseset">
      {baseset.map((card) => (
        <Link to={card.cardId} key={card.cardId}>
          <h3>Player Name: {card.playerName}</h3>
          <h4>Team Name: {card.teamName}</h4>
          <br />
          <Image />
        </Link>
      ))}
    </div>
  );
}

//base set loader function
export const baseSetLoader = async () => {
  const res = await fetch("http://localhost:4000/baseset");

  return res.json();
};

const Image = styled.img`
    width: 20vw;
  `

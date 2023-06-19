import styled from "styled-components";
import { Link, useLoaderData, useParams } from "react-router-dom";
import cardFrontPlacehold from "../images/card-front-placehold.svg";
import cardBackPlacehold from "../images/card-back-placehold.svg";
import StatsTable from "../components/StatsTable.js";


export default function CardDetails() {
  const { pathid } = useParams();
  const card = useLoaderData();

  return (
    <div className="cardDetails">
      <h3>Player Name: {card.playerName}</h3>
      <h3>Id: {pathid}</h3>
      <ul>
        <li>Team Name: {card.teamName}</li>
        <li>Index Number: {card.cardId}</li>
        <li>Card Type: {card.cardType}</li>
        <li>Stats:</li>
        <p>HT:X'Y"</p>
        <p>WT: xxx</p>
        <p>BATS: LEFT/RIGHT/BOTH</p>
        <p>THROWS: LEFT/RIGHT/BOTH</p>
        <p>SIGNED, TEAMNAME YEAR[as free agent]</p>
        <p>ACS: [FREE AGENT], MM-DD-YY</p>
        <p>BORN: MM-DD-YY, [CITY, COUNTRY]</p>
        <p>blurb text</p>
        <hr />
        <h3>MAJOR LEAGUE BATTING RECORD</h3>
        <h3>LEAGUE LEADER IN XXXXX</h3>
        <StatsTable />
        <br />
        <Image src={cardFrontPlacehold} alt="placehold for front of card" />
        <Image src={cardBackPlacehold} alt="placehold for back of card" />
        <Link to="https://www.topps.com/2023-topps-series-1-baseball-hobby-box.html">Product Link</Link>
      </ul>
    </div>
  );
}

//loader function
//the params property is provided by ReactRouter and allows us access to the path property associated with BaseSetDetails component which is a prop within the route in App.js.
//cardId is our route
export const cardDetailsLoader = async ({ params }) => {
  const { pathid } = params;

  const res = await fetch('http://localhost:4000/baseset/' + pathid);

  return res.json();
};


const Image = styled.img`
    width: 20vw;
  `

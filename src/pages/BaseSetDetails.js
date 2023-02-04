import { useLoaderData, useParams } from "react-router-dom";

export default function BaseSetDetails() {
  const { id } = useParams();
  const baseSet = useLoaderData()

  return (
    <div className="baseSet-details">
      <h2>2022 Topps Series 1 Baseball Checklist</h2>
      <h3>Starting with: {baseSet.playerName}</h3>
      <h3>Set index number: {baseSet.cardId}</h3>
      <p>Team Name: {baseSet.teamName}</p>
      <p>Card Type: {baseSet.cardType}</p>
    </div>
  );
}

//loader function
export const baseSetDetailsLoader = async ({ params }) => {
  const { id } = params
  
  const res = await fetch('http://localhost:4000/baseset/' + id )

  return res.json()
};

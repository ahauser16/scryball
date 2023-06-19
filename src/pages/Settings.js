import React from "react";
import { SplitScreenLR } from "../components/SplitScreen.js";
import styled from "styled-components";
import mlbTeamColorsModel from "../assets/images/mlbLogos/mlbTeamColorsModel.json";
import sportsCardTesta from "../assets/images/toppsMlb2022series1/sportsCardTest_21.6mb.png";
import sportsCardTestb from "../assets/images/toppsMlb2022series1/sportsCardTest_5.2mb.png";
import sportsCardTestc from "../assets/images/toppsMlb2022series1/Jarren-Duran-testv2.png";

const LeftHandComponent = () => {
  return (
    <>
      <TeamLogo src={sportsCardTesta} alt="test" />
      <TeamLogo src={sportsCardTestb} alt="test" />
      <TeamLogo src={sportsCardTestc} alt="test" />
    </>
  );
};

const RightHandComponent = () => {
  const mlbTeamColors = mlbTeamColorsModel.mlbColors;
  console.log(mlbTeamColors);

  return (
    <div>
      <h1>Right Hand Component</h1>
    </div>
  );
};

export const Settings = () => {
  return (
    <>
      <h1>Settings</h1>
      <SplitScreenLR leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreenLR>
    </>
  );
};

const TeamLogo = styled.img`
  height: 800px;
`;

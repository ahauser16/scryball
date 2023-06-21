import { createGlobalStyle } from "styled-components";
import CollegeBlock from "../assets/fonts/CollegeBlockv2.otf";
import mlbColorModel from "./mlbColorModel.json";

console.log(mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[0]);

const GlobalStyle = createGlobalStyle`
 
:root {
    --team-color-primary: ${mlbColorModel.mlbColors[0].officialColors[0].hex};
    --team-color-second: ${mlbColorModel.mlbColors[0].officialColors[1].hex};
    --team-color-third: ${mlbColorModel.mlbColors[0].officialColors[2].hex};
    --team-color-fourth: ${mlbColorModel.mlbColors[0].officialColors[3].hex};
    --team-color-fifth: ${mlbColorModel.mlbColors[0].officialColors[4].hex};
    --jersey-num: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[0].hex};
    --jersey-num-border-1: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[1].hex};
    --jersey-num-border-2: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[2].hex};
    --jersey-num-border-3: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[3].hex};
    --jersey-num-border-4: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[4].hex};
    --jersey-num-border-5: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyNumber[5].hex};
    --jersey-name: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyPlayerName[0].hex};
    --jersey-name-layer-1: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyPlayerName[1].hex};
    --jersey-name-layer-2: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyPlayerName[2].hex};
    --jersey-name-layer-3: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyPlayerName[3].hex};
    --jersey-name-layer-4: ${mlbColorModel.mlbColors[0].uniformColorSchemes.homeTeam.jerseyPlayerName[4].hex};
  }

  @font-face {
      font-family: 'CollegeBlock';
      src: url(${CollegeBlock}) format('opentype');
  }

  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  //font-family: 'Anton', sans-serif;

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

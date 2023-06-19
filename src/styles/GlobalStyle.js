import { createGlobalStyle } from "styled-components";
import CollegeBlock from "../assets/fonts/CollegeBlockv2.otf";
import mlbColorModel from "./mlbColorModel.json";

console.log(mlbColorModel.mlbColors[0].playerNumberScheme[1].hex);

const GlobalStyle = createGlobalStyle`
 
:root {
    --team-color-primary: ${mlbColorModel.mlbColors[0].officialColors[0].hex};
    --team-color-second: ${mlbColorModel.mlbColors[0].officialColors[1].hex};
    --team-color-third: ${mlbColorModel.mlbColors[0].officialColors[2].hex};
    --team-color-fourth: ${mlbColorModel.mlbColors[0].officialColors[3].hex};
    --team-color-fifth: ${mlbColorModel.mlbColors[0].officialColors[4].hex};
    --jersey-number-text: ${mlbColorModel.mlbColors[0].playerNumberScheme[0].hex};
    --jersey-number-border-layer-1: ${mlbColorModel.mlbColors[0].playerNumberScheme[1].hex};
    --jersey-number-border-layer-2: ${mlbColorModel.mlbColors[0].playerNumberScheme[2].hex};
    --jersey-number-border-layer-3: ${mlbColorModel.mlbColors[0].playerNumberScheme[3].hex};
    --jersey-number-border-layer-4: ${mlbColorModel.mlbColors[0].playerNumberScheme[4].hex};
    --jersey-number-border-layer-5: ${mlbColorModel.mlbColors[0].playerNumberScheme[5].hex};
    --background-color: rgb(211, 211, 211);
    --player-color: hsl(240, 50%, 50%);
  }

  @font-face {
      font-family: 'CollegeBlock';
      src: url(${CollegeBlock}) format('opentype');
  }

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

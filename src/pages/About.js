import { SplitScreenLR } from "../components/SplitScreen.js";
import styled from "styled-components";

const LeftHandComponent = ({ name }) => {
  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>{name}</h1>
      <CollegeBlockTest>20</CollegeBlockTest>
    </>
  );
};

const RightHandComponent = ({ message }) => {
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>{message}</h1>
      <TeamName>Team Name Color Test</TeamName>
      <CollegeBlockTest2>32</CollegeBlockTest2>
      <SwatchContainer>
        <TeamColorPrimary />
        <TeamColorSecond />
        <TeamColorThird />
        <TeamColorFourth />
        <TeamColorFifth />
      </SwatchContainer>
    </>
  );
};
export const About = () => {
  return (
    <>
      <h1>About</h1>
      <SplitScreenLR leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Arthur" />
        <RightHandComponent message="Hello" />
      </SplitScreenLR>
    </>
  );
};

const CollegeBlockTest = styled.h1`
  color: red;
  padding: 1rem;
  font-family: "CollegeBlock", sans-serif;
  font-size: 10em;
  text-shadow: 0.001em 0.001em 0em #f3faea, -0.001em -0.001em 0em #f3faea,
    0.001em -0.001em 0em #f3faea, -0.001em 0.001em 0em #f3faea,
    0.002em 0.002em 0em #f4dfce, -0.002em -0.002em 0em #f4dfce,
    0.002em -0.002em 0em #f4dfce, -0.002em 0.002em 0em #f4dfce,
    0.003em 0.003em 0em #d49c8f, -0.003em -0.003em 0em #d49c8f,
    0.003em -0.003em 0em #d49c8f, -0.003em 0.003em 0em #d49c8f,
    0.004em 0.004em 0em #871b32, -0.004em -0.004em 0em #871b32,
    0.004em -0.004em 0em #871b32, -0.004em 0.004em 0em #871b32,
    0.01em 0.01em 0em #a71930, -0.01em -0.01em 0em #a71930,
    0.01em -0.01em 0em #a71930, -0.01em 0.01em 0em #a71930;
`;

const CollegeBlockTest2 = styled.h1`
  color: var(--jersey-number-text);
  padding: 1rem;
  font-family: "CollegeBlock", sans-serif;
  font-size: 10em;
  text-shadow: 0.01em 0.01em 0em var(--jersey-number-border-layer-5),
    -0.01em -0.01em 0em var(--jersey-number-border-layer-5),
    0.01em -0.01em 0em var(--jersey-number-border-layer-5),
    -0.01em 0.01em 0em var(--jersey-number-border-layer-5),
    0.012em 0.012em 0em var(--jersey-number-border-layer-4),
    -0.012em -0.012em 0em var(--jersey-number-border-layer-4),
    0.012em -0.012em 0em var(--jersey-number-border-layer-4),
    -0.012em 0.012em 0em var(--jersey-number-border-layer-4),
    0.0125em 0.0125em 0em var(--jersey-number-border-layer-3),
    -0.0125em -0.0125em 0em var(--jersey-number-border-layer-3),
    0.0125em -0.0125em 0em var(--jersey-number-border-layer-3),
    -0.0125em 0.0125em 0em var(--jersey-number-border-layer-3),
    0.0127em 0.0127em 0em var(--jersey-number-border-layer-2),
    -0.0127em -0.0127em 0em var(--jersey-number-border-layer-2),
    0.0127em -0.0127em 0em var(--jersey-number-border-layer-2),
    -0.0127em 0.0127em 0em var(--jersey-number-border-layer-2),
    0.0128em 0.0128em 0em var(--jersey-number-border-layer-1),
    -0.0128em -0.0128em 0em var(--jersey-number-border-layer-1),
    0.0128em -0.0128em 0em var(--jersey-number-border-layer-1),
    -0.0128em 0.0128em 0em var(--jersey-number-border-layer-1);
`;

const TeamName = styled.h1`
  color: var(--jersey-number-border-layer-5);
`;

const TeamColorPrimary = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--team-color-primary);
`;

const TeamColorSecond = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--team-color-second);
`;

const TeamColorThird = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--team-color-third);
`;

const TeamColorFourth = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--team-color-fourth);
`;

const TeamColorFifth = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--team-color-fifth);
`;

const SwatchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

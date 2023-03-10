import { SplitScreenLR } from "../components/SplitScreen";
import styled from "styled-components";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
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

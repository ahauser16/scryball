import { SplitScreenTB } from "../components/SplitScreen";
import styled from "styled-components";

const InputContainer = ({UserInput}) => {
    return <h1 style={{ backgroundColor: "green" }}>{UserInput}</h1>;
}

const ResultsContainer = ({DBresults}) => {
    return <h1 style={{ backgroundColor: "red" }}>{DBresults}</h1>;
}

export const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <SplitScreenTB leftWeight={1} rightWeight={3}>
        <InputContainer UserInput="Input Field Components" />
        <ResultsContainer DBresults="Results From Database" />
      </SplitScreenTB>
    </>
  );
};

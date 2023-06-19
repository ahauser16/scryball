import styled from "styled-components";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        <FieldGroupWrapper>
          <WelcomeText>
            Scryball is a powerful search tool for all your sport card
            collecting needs
          </WelcomeText>
          <br />
          <SearchFieldWrapper>
            <SearchField />
            <SearchLabel>Player Name</SearchLabel>
          </SearchFieldWrapper>

          <Link to="">Advanced Search</Link>
          <br />
          <br />

          <SearchFieldWrapper>
            <SearchField />
            <SearchLabel>Sport</SearchLabel>
          </SearchFieldWrapper>

          <SearchFieldWrapper>
            <SearchField />
            <SearchLabel>Brand</SearchLabel>
          </SearchFieldWrapper>

          <SearchFieldWrapper>
            <SearchField />
            <SearchLabel>Team Name</SearchLabel>
          </SearchFieldWrapper>

          <SearchFieldWrapper>
            <SearchField />
            <SearchLabel>Year</SearchLabel>
          </SearchFieldWrapper>

          <SearchFieldWrapper>
            <SearchField />
            <SearchLabel>Card Type</SearchLabel>
          </SearchFieldWrapper>

        </FieldGroupWrapper>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: lightslategray; */
  max-width: 600px;
  margin: 0 auto;
`;

const SearchFieldWrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
    margin-bottom: 1.5em;
  position: relative;
`;

const SearchLabel = styled.label`
  color: #42b490;
  font-size: 0.8em;
`;

const SearchField = styled.input`
  border: solid 1px #ccc;
  border-radius: 4px;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  cursor: text;
  color: #707070;
`;

const WelcomeText = styled.h2``;

const FieldGroupWrapper = styled.div`
  border-radius: 8px;
  border: solid 2px lightslategray;
  padding: 1em 2em;
  margin: 1.5em 0.75em;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;

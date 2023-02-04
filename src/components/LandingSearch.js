import react from "react";
import styled from "styled-components";
import { Form } from "react-router-dom";

export const LandingSearch = () => {
  const account = {
    username: "Your",
  };
  return (
    <div id="searchCriteria">
      <div>
        <h1>
          {account.brand ? <>{account.username}</> : <i>No Name</i>}
          {/* <Favorite searchCriteria={searchCriteria} /> */}
        </h1>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if ("Please confirm you want to delete this record.") {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

const WelcomeMsg = styled.h1`
  color: black;
  margin: 0 auto;
  background: red;
`;

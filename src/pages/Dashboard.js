import styled from "styled-components";

import { RegularList } from "../components/RegularList";
import { people } from "../data/people";
import { SmallPersonListItem } from "../components/people/SmallPersonListItem";
import { LargePersonListItem } from "../components/people/LargePersonListItem";

const ListContainer = styled.div`
  background-color: cyan;
`;

export const Dashboard = () => {
  return (
    <ListContainer>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </ListContainer>
  );
};

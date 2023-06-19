import styled from "styled-components";

import { RegularList } from "../components/RegularList.js";
import { people } from "../data/people.js";
import { SmallPersonListItem } from "../components/people/SmallPersonListItem.js";
import { LargePersonListItem } from "../components/people/LargePersonListItem.js";

const ListContainer = styled.div`
  background-color: cyan;
`;

export const Browse = () => {
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

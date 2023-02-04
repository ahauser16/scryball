import React from "react";
import styled from "styled-components";

export const SplitScreenQuad = ({
  sidebar: Sidebar,
  topleft: Topleft,
  topright: Topright,
  bottomleft: Bottomleft,
  bottomright: Bottomright,
}) => {
  return (
    <>
      <ContainerQuad>
        <SidebarPane>
          <Sidebar />
        </SidebarPane>
        <PaneQuad>
          <Topleft />
        </PaneQuad>
        <PaneQuad>
          <Topright />
        </PaneQuad>
        <PaneQuad>
          <Bottomleft />
        </PaneQuad>
        <PaneQuad>
          <Bottomright />
        </PaneQuad>
      </ContainerQuad>
    </>
  );
};

const ContainerQuad = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  background-color: lightgray;
`;

const SidebarPane = styled.div`
  grid-row: 1 / span 2;
`;
const PaneQuad = styled.div``;

/////////////////////////////////////


const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

const ContainerLR = styled.div`
  display: flex;
  flex-direction: row;
`;

//////////////////////////////////////
export const SplitScreenLR = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <ContainerLR>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </ContainerLR>
  );
};

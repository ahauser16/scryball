import { SplitScreenQuad } from "../components/SplitScreen";

export const AdvancedSearch = () => {
    return (
      <>
        <SplitScreenQuad
          sidebar={Sidebar}
          topleft={UserInputFields}
          topright={UserData}
          bottomleft={TableResults}
          bottomright={ImageResults}
        />
      </>
    );
  };
  
const Sidebar = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Sidebar</h1>
    </div>
  );
};

const UserInputFields = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "lightgreen" }}>UserInputFields</h1>
    </div>
  );
};

const UserData = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "lightgreen" }}>UserData</h1>
    </div>
  );
};

const TableResults = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "pink" }}>TableResults</h1>
    </div>
  );
};

const ImageResults = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>ImageResults</h1>
    </div>
  );
};
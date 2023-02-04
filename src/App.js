import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import { NoMatch } from "./pages/NoMatch";
import { Browse } from "./pages/Browse";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import BaseSet, { BaseSetLoader } from "./pages/BaseSet";
import BaseSetDetails, {BaseSetDetailsLoader} from "./pages/BaseSetDetails";

//layouts
import { LayoutNavigation } from "./components/LayoutNavigation";
import HelpLayout from "./components/HelpLayout";
import BaseSetLayout from "./components/BaseSetLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutNavigation />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="browse" element={<Browse />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="baseset" element={<BaseSetLayout />} >
        <Route 
        index 
        element={<BaseSet />} 
        loader={BaseSetLoader} 
        />
        <Route path=":id" element={<BaseSetDetails />}
        />
      </Route>

      {/* <Route 
        path="id" 
        element={ <BaseSet />}
        loader={BaseSetLoader}
      /> */}

      <Route path="*" element={<NoMatch />} />

    </Route>
  )
);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

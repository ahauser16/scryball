import React from "react";
import GlobalStyle from "./styles/GlobalStyle.js";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Browse } from "./pages/Browse.js";
import { Settings } from "./pages/Settings.js";
import Faq from "./components/Faq.js";
import Contact from "./components/Contact.js";
import { NoMatch } from "./pages/NoMatch.js";
import BaseSet, { baseSetLoader } from "./pages/BaseSet.js";
import CardDetails, { cardDetailsLoader } from "./pages/CardDetails.js";

//layouts
import { LayoutNavigation } from "./components/LayoutNavigation.js";
import HelpLayout from "./components/HelpLayout.js";
import BaseSetLayout from "./components/BaseSetLayout.js";

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

      <Route path="baseset" element={<BaseSetLayout />}>
        <Route index element={<BaseSet />} loader={baseSetLoader} />

        <Route
          path=":pathid"
          element={<CardDetails />}
          loader={() => cardDetailsLoader}
        />
      </Route>
      <Route path="settings" element={<Settings />} />


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

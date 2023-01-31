import React from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {NoMatch} from "./pages/NoMatch";
import {Dashboard} from "./pages/Dashboard";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import { LayoutNavigation } from "./components/LayoutNavigation";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutNavigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}


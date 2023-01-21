import React from "react";
import { Routes, Route } from "react-router-dom";
import { Page1 } from "../pages/page-1/page-1";
import { Page2 } from "../pages/page-2/page-2";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Page1 />} />
      <Route path="/2" element={<Page2 />} />
    </Routes>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import Find from "./components/Find";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Find />} />
    </Routes>
  );
}

export default App;

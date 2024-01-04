import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/read" element={<Read />}></Route>
        <Route exact path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

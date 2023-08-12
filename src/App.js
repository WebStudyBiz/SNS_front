import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

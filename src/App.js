import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  background-color: skyblue;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: #f1f1f1;
`;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BodyContainer>
        <LeftContent>hello</LeftContent>
        <RightContent>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </RightContent>
      </BodyContainer>
    </BrowserRouter>
  );
}

export default App;

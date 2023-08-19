import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import Sidebar from "./components/SideBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
  width: 15%;
  height: 100%;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BodyContainer>
        <LeftContent>
          <Sidebar />
        </LeftContent>
        <RightContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </RightContent>
      </BodyContainer>
    </BrowserRouter>
  );
}

export default App;

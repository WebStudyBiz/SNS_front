import React from "react";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Logo from "./Logo";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  background-color: #fff;
  height: 60px;
  top: 0;
  width: 100%;
`;

const NavbarItem = styled.div`
  padding: 0px 10px;
  flex: ${(props) => props.flex || 1};
`;

const NavbarItemRight = styled.div`
  padding: 0px 10px;
  float: right;
`;

function Navbar() {
  const navigate = useNavigate();

  const handleClickLoginBtn = () => {
    navigate("/login");
  };

  const handleClickSignInBtn = () => {
    navigate("/signup");
  };

  return (
    <NavbarContainer>
      <NavbarItem>
        <Logo />
      </NavbarItem>
      <NavbarItem flex={1.5}>
        <SearchBar />
      </NavbarItem>
      <NavbarItem>
        <NavbarItemRight>
          <CustomButton text="로그인" onClick={handleClickLoginBtn} />
          <CustomButton
            text="가입하기"
            onClick={handleClickSignInBtn}
            backgroundColor="#fff"
            textColor="#007bff"
          />
        </NavbarItemRight>
      </NavbarItem>
    </NavbarContainer>
  );
}

export default Navbar;

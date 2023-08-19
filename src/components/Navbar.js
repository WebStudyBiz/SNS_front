import React from "react";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Logo from "./Logo";

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

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarItem>
        <Logo />
      </NavbarItem>
      <NavbarItem flex={2}>
        <SearchBar />
      </NavbarItem>
      <NavbarItem>
        <Profile float="right" />
      </NavbarItem>
    </NavbarContainer>
  );
}

export default Navbar;

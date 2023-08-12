import React from "react";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Logo from "./Logo";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: #fff;
  height: 60px;
  top: 0;
  width: 100%;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <SearchBar />
      <Profile />
    </StyledNavbar>
  );
}

export default Navbar;

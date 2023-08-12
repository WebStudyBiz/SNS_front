import React from "react";
import { styled } from "styled-components";
import { FaSistrix } from "react-icons/fa6";

const StyledSearchBar = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  margin: auto 0;
  padding: 2px 15px;
  border-radius: 20px;
  box-shadow: 0px 0px 8px #ddd;
  height: 30px;
  width: 100%;
`;

const StyledSearchInput = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

function SearchBar() {
  return (
    <StyledSearchBar>
      <FaSistrix />

      <StyledSearchInput placeholder="Search Friend, Post or Video... " />
    </StyledSearchBar>
  );
}

export default SearchBar;

import React from "react";
import { styled } from "styled-components";
import { FaSistrix } from "react-icons/fa6";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 2px 15px;
  border-radius: 20px;
  box-shadow: 0px 0px 8px #ddd;
  height: 40px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  font-size: 20px;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

function SearchBar() {
  return (
    <Container>
      <FaSistrix />
      <Input placeholder="Search Friend, Post or Video... " />
    </Container>
  );
}

export default SearchBar;

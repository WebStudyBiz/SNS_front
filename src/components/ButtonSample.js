import React from "react";
import { styled } from "styled-components";

const StyledSampleButton = styled.button`
  color: #fff;
  background-color: #0073cf;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 100px;
  cursor: pointer;
`;

function ButtonSample() {
  return (
    <StyledSampleButton onClick={() => alert("Hello")}>
      SampleButton
    </StyledSampleButton>
  );
}

export default ButtonSample;

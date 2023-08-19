import React from "react";
import styled from "styled-components";

// Define your styled button component
const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: ${(props) => props.textColor || "#ffffff"};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  float: ${(props) => props.float || "none"};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

// Define the Button component
function CustomButton({
  text,
  onClick,
  backgroundColor,
  textColor,
  hoverColor,
}) {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hoverColor={hoverColor}
    >
      {text}
    </StyledButton>
  );
}

export default CustomButton;

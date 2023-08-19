import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: ${(props) => props.textColor || "#ffffff"};
  padding: 10px 20px;
  margin: 0px 4px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "#0056b3"};
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

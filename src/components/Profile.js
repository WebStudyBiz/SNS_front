import React from "react";
import styled from "styled-components";
import userDefaultIcon from "../images/userDefaultIcon.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: gray;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
`;

function Profile({ float }) {
  return (
    <Container float={float}>
      <Image src={userDefaultIcon} />
    </Container>
  );
}

export default Profile;

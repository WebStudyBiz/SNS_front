import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpComponent = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/register",
        {
          userId: userId,
          userPassword: userPassword,
          userPasswordCheck: userPasswordCheck,
          userEmail: userEmail,
          userNickname: userNickname,
        },
        { "Content-Type": "application/json" }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <SignUpContainer>
      <h2>회원가입</h2>
      <SignUpForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>아이디</Label>
          <InputField
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>비밀번호</Label>
          <InputField
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>비밀번호 확인</Label>
          <InputField
            type="password"
            value={userPasswordCheck}
            onChange={(e) => setUserPasswordCheck(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <InputField
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>닉네임</Label>
          <InputField
            type="text"
            value={userNickname}
            onChange={(e) => setUserNickname(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpComponent;

import React from "react";
import ButtonSample from "../components/ButtonSample";
import CustomButton from "../components/CustomButton";
import Profile from "../components/Profile";

function Home() {
  return (
    <div>
      <CustomButton
        text="Click me"
        onClick={() => alert("hello")}
        backgroundColor="#ff9900"
        textColor="#ffffff"
        hoverColor="#e68a00"
      />
      <div>Home</div>
      <Profile />
      <ButtonSample />
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      v
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
      <div>
        <ButtonSample />
      </div>
    </div>
  );
}

export default Home;

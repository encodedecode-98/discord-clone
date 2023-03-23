import React, { useState } from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";
const LoginPageInputs = ({ mail, setMail, password, setPassword }: any) => {
  return (
    <div>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter E-mail Address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter Password"
      />
    </div>
  );
};

export default LoginPageInputs;

// nargis, parbati , farhana , parul, rumi
// parbati

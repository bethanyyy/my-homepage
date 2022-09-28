import React from "react";
import {
  SuccessContainer,
  Underline,
  UnderlineSecond,
} from "../styles/SuccessStyle";

const Success = () => {
  return (
    <SuccessContainer>
      <div>
        <p>Thank you for leaving a message!</p>
        <Underline />
        <UnderlineSecond />
      </div>
    </SuccessContainer>
  );
};

export default Success;

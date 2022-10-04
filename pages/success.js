import React from "react";
import {
  MessageContainer,
  Underline,
  UnderlineSecond,
} from "../styles/ContactMessageStyle";

const Success = () => {
  return (
    <MessageContainer>
      <div>
        <p>Thank you for leaving a message!</p>
        <Underline />
        <UnderlineSecond />
      </div>
    </MessageContainer>
  );
};

export default Success;

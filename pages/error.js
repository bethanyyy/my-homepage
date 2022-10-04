import React from "react";
import {
  MessageContainer,
  Underline,
  UnderlineSecond,
} from "../styles/ContactMessageStyle";

const Error = () => {
  return (
    <MessageContainer>
      <div>
        <p>
          Sorry, an error occurred when sending the message, please try again
          later or send me an email at bethany_yao@outlook.com!
        </p>
        <Underline />
        <UnderlineSecond />
      </div>
    </MessageContainer>
  );
};

export default Error;

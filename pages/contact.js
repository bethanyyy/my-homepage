import React, { useEffect, useState } from "react";
import { ContactContainer, Form, LetterImage } from "../styles/ContactStyle";
import { EmphasizedText } from "../styles/SharedStyle";
import { pageTransition } from "../lib/animation";
// import SubmitButton from "../public/SubmitButton.svg";
import Letter from "../public/Letter.svg";

const Contact = () => {
  return (
    <ContactContainer
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </p>
        <p>
          <button type="submit">
            <span>Submit</span>
          </button>
        </p>
      </Form>
      <div>
        <h2>
          <EmphasizedText>Let&apos;s Connect!</EmphasizedText>
        </h2>
        <p>
          If you have an idea that you want to share, or found something here
          that interests you, or just want to make a new friend, drop me a
          message!
        </p>
        <LetterImage>
          <Letter />
        </LetterImage>
      </div>
    </ContactContainer>
  );
};

export default Contact;

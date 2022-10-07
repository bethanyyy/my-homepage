import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

import {
  ContactContainer,
  Form,
  LetterImage,
  MessageModal,
  MessageModalContainer,
  Underline,
  UnderlineSecond,
} from "../styles/ContactStyle";
import { EmphasizedText } from "../styles/SharedStyle";
import { pageTransition } from "../lib/animation";
// import SubmitButton from "../public/SubmitButton.svg";
import Letter from "../public/Letter.svg";
import CrossSign from "../public/CrossSign.svg";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("submitting....");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage("submitting....");
    setShowModal(true);
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_nax7h48",
        "template_0f2mcii",
        form.current,
        "KNNsZFWHGS47BvjxZ"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          console.log(result.text);
          setMessage("Thank you for leaving a message!");
        },
        (error) => {
          setIsSubmitting(false);
          console.log(error.text);
          setMessage(
            "Sorry, an error occurred when sending the message, please try again later or send me an email at bethany_yao@outlook.com!"
          );
        }
      )
      .then((result) => {
        setShowCloseModal(true);
      });
  };

  return (
    <ContactContainer
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {showModal && (
        <MessageModalContainer>
          <MessageModal isSubmit={isSubmitting}>
            <div>
              <p>{message}</p>
              <Underline />
              <UnderlineSecond />
            </div>
            {showCloseModal && (
              <CrossSign
                onClick={() => {
                  setShowModal(false);
                  setShowCloseModal(false);
                }}
              />
            )}
          </MessageModal>
        </MessageModalContainer>
      )}
      <Form ref={form} name="contact" method="post" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" />
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

import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 0.5rem 0.8rem;
  > * {
    flex-basis: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 23rem;
  padding-top: 10px;
  overflow-y: auto;

  /* background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 5px 6px 0px #fdc388;
  border: solid 4px;
  border-color: #ffe0a1;
  border-radius: 3px; */

  border: 1rem solid;
  border-image: url("/ButtonTest1.svg") 30%;
  border-radius: 1rem;

  p,
  label,
  input,
  textarea {
    width: 80%;
  }

  p {
    margin-bottom: 13px;
  }

  label {
    display: block;
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme.colors.mainBg};
    box-shadow: 5px 6px 0px #fdc388;
    border: solid 4px;
    border-color: #ffe0a1;
    border-radius: 3px;
  }

  button {
    position: relative;
    width: 4.2rem;
    height: 2.3rem;
    margin-left: 3px;
    padding: 0;
    border: none;

    background-color: ${({ theme }) => theme.colors.mainBg};
    background-image: url("/SubmitButton_Dark2.svg");
    background-repeat: no-repeat;
    background-position: bottom;

    color: ${({ theme }) => theme.colors.mainBg};
    text-transform: uppercase;

    cursor: pointer;

    :active {
      background-image: url("/SubmitButton_Dark2_Pressed.svg");
      span {
        display: block;
        padding-top: 10px;
      }
    }
  }
`;

export const LetterImage = styled.div`
  width: 8rem;
`;

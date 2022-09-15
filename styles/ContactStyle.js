import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--size-800);
  padding-inline: var(--size-300);
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
  /* padding-top: 10px; */
  padding-top: var(--size-300);
  overflow-y: auto;

  /* background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 5px 6px 0px #fdc388;
  border: solid 4px;
  border-color: #ffe0a1;
  border-radius: 3px; */

  background-color: var(--clr-neutral-300);
  border: 1rem solid;
  border-image: url("/ContactFormBg.svg") 30%;
  border-radius: 1rem;

  p,
  label,
  input,
  textarea {
    width: 80%;
  }

  p {
    /* margin-bottom: 13px; */
    margin-block: var(--size-300);
  }

  label {
    display: block;
  }

  input,
  textarea {
    background-color: var(--clr-neutral-100);
    box-shadow: 5px 6px 0px var(--clr-secondary);
    border: solid 4px;
    border-color: var(--clr-neutral-400);
    border-radius: 3px;
  }

  button {
    position: relative;
    width: 4.2rem;
    height: 2.3rem;
    margin-left: 3px;
    padding: 0;
    border: none;

    background-color: var(--clr-neutral-300);
    background-image: url("/SubmitButton_Dark2.svg");
    background-repeat: no-repeat;
    background-position: bottom;

    color: var(--clr-neutral-100);
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

import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-800);
  padding-inline: var(--size-300);

  @media (min-width: 1190px) {
    flex-direction: row;
    > * {
      flex-basis: 50%;
    }
  }
`;

export const MessageModalContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 224, 161, 0.3);
  border-radius: var(--size-400);
  z-index: 1;

  backdrop-filter: blur(0.75rem);
`;

export const MessageModal = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 0.75rem solid;
  border-image: url("/ButtonTest1.svg") 18%;
  border-radius: 2rem;

  min-width: 30rem;
  padding: 2rem 6rem 3.4rem 6rem;
  background-color: var(--clr-neutral-400);

  p {
    position: relative;
    text-align: center;
    margin-bottom: 0.2rem;

    ${({ isSubmit }) =>
      isSubmit &&
      `
      ::after {
        content: "";
        position: absolute;
        background: var(--clr-neutral-400);
        /* background: red; */
        right: 0;
        width: 0.5ch;
        height: 100%;
        animation: typing 1s steps(2) infinite;
      }

      @keyframes typing {
        100% {
          right: -1ch;
        }
      }
    `}
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const Underline = styled.div`
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 0.2rem;
    background-color: var(--clr-accent);
  }
`;

export const UnderlineSecond = styled(Underline)`
  :before {
    top: 0.4rem;
    background-color: #cdebef;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 100%;
  height: 23rem;
  padding-top: var(--size-300);
  overflow-y: auto;

  background-color: var(--clr-neutral-300);
  border: 1rem solid;
  border-image: url("/ContactFormBg.svg") 30%;
  border-radius: 1rem;

  @media (min-width: 1190px) {
    flex-shrink: 1;
  }

  @media (min-width: 1536px) {
    height: 29rem;
  }

  p,
  label,
  input,
  textarea {
    width: 80%;
  }

  p {
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

  textarea {
    @media (min-width: 1536px) {
      height: 7rem;
    }
  }

  button {
    position: relative;
    width: 4.3rem;
    height: 2.3rem;
    margin-left: 3px;
    padding: 0;
    border: none;

    background-color: var(--clr-neutral-300);
    background-image: url("/LiveSiteButton.svg");
    background-repeat: no-repeat;
    background-position: bottom;

    color: var(--clr-neutral-100);
    text-transform: uppercase;

    cursor: pointer;

    :active {
      background-image: url("/LiveSiteButton_Pressed.svg");
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

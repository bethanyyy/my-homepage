import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkDetailsContainer = styled(motion.div)``;

export const BackButtonContainer = styled.div`
  position: relative;
  margin-bottom: var(--size-300);
  z-index: 2;
`;

export const BackButtonStyle = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;

  :hover {
    animation: bounce 0.7s steps(1, start) infinite;
  }

  @keyframes bounce {
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translate(0px);
    }
  }
`;

export const BackButtonShadow = styled.div`
  position: absolute;
  bottom: -1px;
  width: 2rem;
  height: 10px;
  background-color: var(--clr-secondary);
  border-radius: 50%;
  opacity: 0.5;
  z-index: -1;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-400);

  @media (min-width: 1190px) {
    flex-direction: row;
    > * {
      flex-basis: 50%;
    }
  }
`;

export const LeftSection = styled.div`
  h2 {
    padding-bottom: 1rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;

  border-radius: 8px;
  border: 4px solid;
  border-image: url("/BorderImage.svg") 9%;
  background-color: var(--clr-secondary);
`;

export const Description = styled.div`
  padding: 3px;
  margin-bottom: var(--size-700);
  background-color: var(--clr-neutral-100);
  box-shadow: 5px 6px 0px var(--clr-secondary);
  border: solid 4px;
  border-color: var(--clr-neutral-400);
  border-radius: 3px;
`;

export const DescriptionDetails = styled.div`
  padding-left: var(--size-300);
  padding-bottom: var(--size-300);
  p {
    margin-top: 0;
    span {
    }
  }
`;

export const LiveSiteButton = styled.button`
  position: relative;
  width: 6rem;
  height: 2.5rem;
  margin-top: auto;
  padding-bottom: 0.4rem;
  margin-left: var(--size-300);
  border: none;

  background-color: transparent;
  background-image: url("/LiveSiteButton.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  color: var(--clr-neutral-100);
  text-transform: uppercase;

  cursor: pointer;

  :hover {
    span {
      display: inline-block;
      transform: translateX(0.2rem);
    }
  }
`;

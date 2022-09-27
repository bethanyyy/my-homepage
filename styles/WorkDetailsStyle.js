import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkDetailsContainer = styled(motion.div)``;

export const BackButtonContainer = styled.div`
  position: relative;
  margin-bottom: var(--size-300);
  z-index: 2;
`;

export const BackButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* flex-basis: 50%; */
`;

export const RightSection = styled.div`
  /* flex-basis: 50%; */
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
`;

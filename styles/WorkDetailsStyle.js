import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkDetailsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BackButtonContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const BackButtonStyle = styled.div`
  width: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aliceblue; */

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
  background-color: rgb(253, 195, 136);
  opacity: 0.5;
  border-radius: 50%;
  z-index: -1;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const LeftSection = styled.div`
  flex-basis: 50%;
`;

export const RightSection = styled.div`
  flex-basis: 50%;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  border: 4px solid;
  border-image: url("/BorderImage.svg") 9%;
  background-color: #fdc388;
`;

export const Description = styled.div`
  padding: 3px;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 5px 6px 0px #fdc388;
  border: solid 4px;
  border-color: #ffe0a1;
  border-radius: 3px;
`;

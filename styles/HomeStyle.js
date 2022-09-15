import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: var(--size-700);
  gap: var(--size-700);
`;

export const IntroductionSection = styled(motion.div)`
  /* padding-left: 2rem; */
`;
export const ThumbnailSection = styled.div`
  flex-basis: 30%;
  height: 16rem;
`;

export const Heading = styled.p`
  font-family: var(--ff-accent);
  margin-bottom: var(--size-700);
  border-radius: 1rem;

  a {
    position: relative;

    :after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      width: 0%;
      height: 3px;
      background-color: black;
      transition: width 0.5s;
    }

    :hover:after {
      width: 100%;
    }
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 10rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  border: 0.2rem solid;
  border-color: #e8ab6e;
  overflow: hidden;
`;

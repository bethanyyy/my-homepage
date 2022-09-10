import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  display: flex;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.2rem 2.2rem;
`;

export const IntroductionSection = styled(motion.div)`
  padding-left: 2rem;
`;
export const ThumbnailSection = styled.div`
  flex-basis: 30%;
  height: 16rem;
`;

export const Heading = styled.p`
  font-family: "NTBrickSans";
  margin-bottom: 2rem;
  /* background-color: white; */
  /* border: 1rem solid; */
  border-radius: 1rem;

  a {
    position: relative;

    :after {
      position: absolute;
      content: "";
      background-color: black;
      width: 0%;
      height: 3px;
      bottom: -1px;
      left: 0;
      right: 0;
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

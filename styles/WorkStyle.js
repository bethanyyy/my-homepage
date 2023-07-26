import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkContainer = styled(motion.div)`
  width: 100%;
`;

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--size-300);

  ::after {
    content: "";
    grid-column: span 2;
    /* background-color: aliceblue; */
    height: var(--size-300);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

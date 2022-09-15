import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkContainer = styled(motion.div)`
  width: 100%;
`;

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 10px; */
  gap: var(--size-300);
`;

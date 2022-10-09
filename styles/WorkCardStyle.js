import styled from "styled-components";

export const Card = styled.div`
  border-radius: 8px;
  border: 4px solid;
  border-image: url("/BorderImage.svg") 9%;
  background-color: var(--clr-secondary);
  overflow: hidden;
  cursor: pointer;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 130px;

  @media only screen and (min-width: 1536px) {
    height: 160px;
  }
`;

import styled from "styled-components";

export const MessageContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.4rem;

  p {
    text-align: center;
    margin-bottom: 0.2rem;
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

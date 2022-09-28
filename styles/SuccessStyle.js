import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.4rem;

  p {
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

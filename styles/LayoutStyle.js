import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 0 auto;
  z-index: 1;
`;

export const LayoutBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60rem;
  height: 30rem;
  border: 1rem solid;
  border-image: url("/ButtonTest1.svg") 30%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export const NavItemWrapper = styled.ul`
  position: absolute;
  top: 3rem;
  left: -3rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: space-around;
  z-index: -1;
`;

export const NavItemStyle = styled.li`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-image: url("/ButtonTest1.svg");
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.8;

  :hover {
    transform: translateX(-0.7rem);
    opacity: 1;
  }
`;

export const NavItemSelected = styled(NavItemStyle)`
  transform: translateX(-0.7rem);
  opacity: 1;
`;

export const NavItemTitle = styled.div`
  position: absolute;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainBg};
  transform: translateX((-0.7rem));
`;

export const Main = styled.main`
  padding: 1.8rem 1.7rem;
  z-index: 0;
  overflow: hidden;
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
`;

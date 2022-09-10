import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media only screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100px;

  a {
    position: absolute;
    top: 30px;
    left: 50px;
    width: 80px;
    height: 50px;
    /* padding: 30px 0 0 20px; */
    color: white;
  }
`;

export const LayoutBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* width: 60rem; */
  width: 75%;
  aspect-ratio: 2/1;
  border: 1.1rem solid;
  border-image: url("/MainBgBorder.svg") 24%;
  border-radius: 2rem;
  background-color: #ffe0a1;
`;

export const NavItemWrapper = styled.ul`
  position: absolute;
  top: 3rem;
  left: -3.2rem;
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

export const NavItemContainer = styled.div`
  position: relative;
`;

export const NavItemTitle = styled.div`
  position: absolute;
  width: 5rem;
  top: 25%;
  left: -6.2rem;
  color: white;
  text-align: end;
`;

export const Main = styled.main`
  padding: 1.8rem 1.7rem;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 1rem;
  /* margin: -3px; */
  z-index: 0;
  overflow: hidden;
`;

export const BackgroundProp = styled.div`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  width: 100%;
  height: 1rem;
  padding: 0;
  /* background-color: #5dbe83; */
`;

export const GrassStyle = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 1rem;
  width: 7rem;
  margin: 0;

  svg {
    display: block;
  }
`;

export const GrassStyle02 = styled(GrassStyle)`
  right: 15rem;
  width: 5rem;
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.mainBg};
  margin-top: 1rem;
`;

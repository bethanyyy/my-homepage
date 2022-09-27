import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: var(--max-width-lg);
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  z-index: 1;

  @media only screen and (min-width: 1536px) {
    max-width: var(--max-width-xl);
  }
`;

export const Header = styled.div`
  position: fixed;
  top: var(--size-400);
  left: var(--size-400);
  /* background-color: var(--clr-neutral-100); */
  width: 50px;
  height: 50px;
  border: 0.5rem solid;
  border-image: url("/MainBgBorder.svg") 19%;
  border-radius: 0.9rem;
  background-color: var(--clr-neutral-400);
  /* border-radius: 100%; */
  /* border: solid 0.2rem; */
  /* border-color: var(--clr-neutral-400); */
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1536px) {
    width: 60px;
    height: 60px;
  }

  a {
    position: absolute;
    width: 35px;
    height: 30px;
    color: white;
    /* background-color: var(--clr-neutral-100);
    border-radius: 0.8rem; */

    @media only screen and (min-width: 1536px) {
      width: 40px;
      height: 30px;
    }
  }

  @media (min-width: 768px) {
    :hover {
      width: 70px;
      height: 70px;

      a {
        width: 45px;
        height: 30px;
      }
    }
  }
`;

export const LayoutBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 75vh;
  border: 1.1rem solid;
  border-image: url("/MainBgBorder.svg") 24%;
  border-radius: 2rem;
  background-color: var(--clr-neutral-400);

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1190px) {
    height: calc(0.37 * var(--max-width-lg));
  }

  @media (min-width: 1536px) {
    height: calc(0.37 * var(--max-width-xl));
  }
`;

export const NavItemWrapper = styled.ul`
  position: absolute;
  top: -4rem;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0;
  z-index: -1;

  @media (min-width: 768px) {
    position: absolute;
    top: 3rem;
    left: -3.2rem;
    display: flex;
    flex-direction: column;
  }
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
    transform: translateY(-0.7rem);
    opacity: 1;

    @media (min-width: 768px) {
      transform: translateX(-0.7rem);
    }
  }
`;

export const NavItemSelected = styled(NavItemStyle)`
  transform: translateY(-0.7rem);
  opacity: 1;

  @media (min-width: 768px) {
    transform: translateX(-0.7rem);
  }
`;

export const NavItemContainer = styled.div`
  position: relative;
`;

export const NavItemTitle = styled.div`
  position: absolute;
  top: -2rem;
  right: 0;
  width: 5rem;
  color: white;
  text-align: end;

  @media (min-width: 768px) {
    position: absolute;
    top: 25%;
    left: -6.2rem;
  }
`;

export const Main = styled.main`
  display: flex;
  padding: var(--size-700) var(--size-600);
  height: 100%;
  background-color: var(--clr-neutral-100);
  border-radius: 1rem;
  overflow: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BackgroundProp = styled.div`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  width: 100%;
  height: 1rem;
`;

export const GrassStyle = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 1rem;
  width: 7rem;
`;

export const GrassStyle02 = styled(GrassStyle)`
  right: 15rem;
  width: 5rem;
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: var(--fs-100);
  color: var(--clr-neutral-100);
  margin-top: var(--size-400);
`;

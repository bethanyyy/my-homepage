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
  top: -2rem;
  left: var(--size-500);
  width: 7rem;
  height: 5rem;
  border: 1rem solid;
  border-image: url("/ButtonTest1.svg") 20%;
  border-radius: 1rem;
  background-color: var(--clr-neutral-400);

  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.3rem;
  cursor: pointer;
  filter: drop-shadow(0px var(--size-300) var(--clr-shadow));

  @media only screen and (min-width: 1536px) {
    width: 9rem;
    height: 5.2rem;
  }

  /* new logo */
  a {
    color: var(--clr-body);
  }

  /* new logo */
  @media (min-width: 768px) {
    :hover {
      transform: translateY(0.75rem);
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
  border-color: transparent;
  border-radius: 2rem;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1190px) {
    height: calc(0.37 * var(--max-width-lg));
  }

  @media (min-width: 1536px) {
    height: calc(0.37 * var(--max-width-xl));
  }

  ::after {
    position: absolute;
    top: 1rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: -1.1rem;
  left: -1.1rem;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: calc(100% + 2.2rem);
  height: calc(100% + 2.2rem);

  border: 1.1rem solid;
  border-image: url("/MainBgBorder.svg") 24%;
  border-radius: 2rem;
  background-color: var(--clr-neutral-400);

  filter: drop-shadow(0px var(--size-700) var(--clr-shadow));
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
  list-style-type: none;
  z-index: -2;

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
  padding-top: 0.1rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  cursor: pointer;

  filter: drop-shadow(0px var(--size-300) var(--clr-shadow));

  background-image: url("/ButtonTest1.svg");
  background-repeat: no-repeat;
  background-position: center;
  /* background-position-x: 50%;
  background-position-y: 0%; */

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
  color: var(--clr-neutral-100);
  text-align: end;

  @media (min-width: 768px) {
    position: absolute;
    top: 25%;
    left: -6.2rem;
  }
`;

export const Main = styled.main`
  padding: var(--size-500) var(--size-500) 0 var(--size-500);
  height: 100%;
  background-color: var(--clr-neutral-100);
  border-radius: 1rem;
  overflow: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::after {
    content: "";
    display: block;
    height: var(--size-500);
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 412px) {
    padding: var(--size-600) var(--size-600) 0 var(--size-600);
    display: flex;
    flex-direction: column;

    > *:last-child {
      margin: auto;
    }
  }
`;

export const BackgroundProp = styled.div`
  position: fixed;
  bottom: 0rem;
  right: 0.75rem;
  width: 100%;
  height: 1rem;
  z-index: 10;

  filter: drop-shadow(0px var(--size-300) var(--clr-shadow));
`;

export const PropStyle = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
`;

export const PropTwitterBoard = styled(PropStyle)`
  position: absolute;
  bottom: 8.5rem;
  right: 2.2rem;
  cursor: pointer;
`;
export const PropInsBoard = styled(PropStyle)`
  position: absolute;
  bottom: 5.1rem;
  right: 6.2rem;
  cursor: pointer;
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
  position: fixed;
  bottom: 0rem;
  right: 5rem;

  font-size: var(--fs-300);
  color: var(--clr-neutral-100);
  z-index: 10;
`;

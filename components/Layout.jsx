import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutBackground,
  NavItemWrapper,
  Main,
  Footer,
  LayoutContainer,
  Header,
  BackgroundProp,
  GrassStyle,
  GrassStyle02,
  PropStyle,
  PropBethanyBoard,
  PropInsBoard,
  Background,
  PropTwitterBoard,
} from "../styles/LayoutStyle";
import NavItem from "./NavItem";
import NavItemMe from "../public/NavItem_Me.svg";
import NavItemMeActive from "../public/NavItem_Me_Active.svg";
import NavItemConnect from "../public/NavItem_Connect2.svg";
import NavItemConnectActive from "../public/NavItem_Connect_Active.svg";
import NavItemWork from "../public/NavItem_Work.svg";
import NavItemWorkActive from "../public/NavItem_Work_Active.svg";

import MainBgShadow from "../public/MainBgShadow.svg";

import Logo from "../public/Logo.svg";
import GrassProp from "../public/BgPropGrass.svg";
import GrassProp02 from "../public/BgPropGrass02.svg";
import CornerProp from "../public/CornerProp.svg";
import TwitterBoard from "../public/TwitterBoard.svg";
import InsBoard from "../public/InsBoard.svg";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <LayoutContainer>
      <Link href={"/"}>
        <Header>
          <a>
            {/* <Image src={"/Logo_Anim.gif"} layout="fill" objectFit="contain" /> */}
            baibaiya.
          </a>
        </Header>
      </Link>
      <LayoutBackground>
        <Background>{/* <MainBgShadow width={"25%"} /> */}</Background>
        <NavItemWrapper>
          <NavItem target={"/"} title={"me"}>
            {currentRoute === "/" ? <NavItemMeActive /> : <NavItemMe />}
          </NavItem>
          <NavItem target={"/work"} title={"work"}>
            {currentRoute.startsWith("/work") ? (
              <NavItemWorkActive />
            ) : (
              <NavItemWork />
            )}
          </NavItem>
          <NavItem target={"/contact"} title={"contact"}>
            {currentRoute === "/contact" ? (
              <NavItemConnectActive />
            ) : (
              <NavItemConnect />
            )}
          </NavItem>
        </NavItemWrapper>
        <Main>{children}</Main>
      </LayoutBackground>
      <BackgroundProp>
        <PropStyle>
          <CornerProp />
        </PropStyle>
        <Link href={"#"}>
          <PropTwitterBoard>
            <TwitterBoard />
          </PropTwitterBoard>
        </Link>
        <Link href={"#"}>
          <PropInsBoard>
            <InsBoard />
          </PropInsBoard>
        </Link>
        {/* <GrassStyle02>
          <GrassProp02 />
        </GrassStyle02> */}
        {/* <div></div> */}
      </BackgroundProp>
      <Footer>© 2022 baibaiya. </Footer>
    </LayoutContainer>
  );
};

export default Layout;

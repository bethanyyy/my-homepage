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
} from "../styles/LayoutStyle";
import NavItem from "./NavItem";
import NavItemMe from "../public/NavItem_Me.svg";
import NavItemMeActive from "../public/NavItem_Me_Active.svg";
import NavItemConnect from "../public/NavItem_Connect2.svg";
import NavItemConnectActive from "../public/NavItem_Connect_Active.svg";
import NavItemWork from "../public/NavItem_Work.svg";
import NavItemWorkActive from "../public/NavItem_Work_Active.svg";

import Logo from "../public/Logo.svg";
import GrassProp from "../public/BgPropGrass.svg";
import GrassProp02 from "../public/BgPropGrass02.svg";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <LayoutContainer>
      <Link href={"/"}>
        <Header>
          <a>
            {/* <Logo /> */}
            <Image src={"/Logo_Anim.gif"} layout="fill" objectFit="contain" />
          </a>
        </Header>
      </Link>
      <LayoutBackground>
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
        <GrassStyle>
          <GrassProp />
        </GrassStyle>
        <GrassStyle02>
          <GrassProp02 />
        </GrassStyle02>
        {/* <div></div> */}
      </BackgroundProp>
      <Footer>By Bethany Yao 2022</Footer>
    </LayoutContainer>
  );
};

export default Layout;

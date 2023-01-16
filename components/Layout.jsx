import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  LayoutBackground,
  NavItemWrapper,
  Main,
  Footer,
  LayoutContainer,
  Header,
  BackgroundProp,
  PropStyle,
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
          <a>baibaiya.</a>
        </Header>
      </Link>
      <LayoutBackground>
        <Background />
        <NavItemWrapper>
          <NavItem target={"/"} title={"me"}>
            {currentRoute === "/" ? <NavItemMeActive /> : <NavItemMe />}
          </NavItem>
          <NavItem target={"/project"} title={"project"}>
            {currentRoute.startsWith("/project") ? (
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
        <Link href={"https://twitter.com/baibaiya__"}>
          <PropTwitterBoard>
            <TwitterBoard />
          </PropTwitterBoard>
        </Link>
        <Link href={"https://www.instagram.com/baibaiya__/"}>
          <PropInsBoard>
            <InsBoard />
          </PropInsBoard>
        </Link>
      </BackgroundProp>
      <Footer>© 2022 baibaiya. </Footer>
    </LayoutContainer>
  );
};

export default Layout;

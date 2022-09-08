import React from "react";
import { useRouter } from "next/router";
import {
  LayoutBackground,
  NavItemWrapper,
  Main,
  Footer,
  LayoutContainer,
  Header,
} from "../styles/LayoutStyle";
import NavItem from "./NavItem";
import NavItemMe from "../public/NavItem_Me.svg";
import NavItemMeActive from "../public/NavItem_Me_Active.svg";
import NavItemConnect from "../public/NavItem_Connect2.svg";
import NavItemConnectActive from "../public/NavItem_Connect_Active.svg";
import NavItemWork from "../public/NavItem_Work.svg";
import NavItemWorkActive from "../public/NavItem_Work_Active.svg";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <LayoutContainer>
      <Header>
        <div>a.bebe</div>
      </Header>
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
      <Footer>By Bethany Yao 2022</Footer>
    </LayoutContainer>
  );
};

export default Layout;

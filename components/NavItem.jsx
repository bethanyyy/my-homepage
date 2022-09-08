import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  NavItemContainer,
  NavItemSelected,
  NavItemStyle,
  NavItemTitle,
} from "../styles/LayoutStyle";
import { useStateContext } from "../lib/context";

const NavItem = ({ target, title, children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [hover, setHover] = useState(false);

  return (
    <NavItemContainer>
      {hover && <NavItemTitle>{title}</NavItemTitle>}
      <Link href={target || ""}>
        {(target === "/" && currentRoute === target) ||
        (target !== "/" && currentRoute.startsWith(target)) ? (
          <NavItemSelected>{children}</NavItemSelected>
        ) : (
          <NavItemStyle
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => setHover(false)}
          >
            {children}
          </NavItemStyle>
        )}
      </Link>
    </NavItemContainer>
  );
};

export default NavItem;

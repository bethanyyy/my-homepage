import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  NavItemSelected,
  NavItemStyle,
  NavItemTitle,
} from "../styles/LayoutStyle";
import { useStateContext } from "../lib/context";

const NavItem = ({ target, children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [hover, setHover] = useState(false);

  return (
    <div>
      {/* <NavItemTitle>me</NavItemTitle> */}
      <Link href={target || ""}>
        {(target === "/" && currentRoute === target) ||
        (target !== "/" && currentRoute.startsWith(target)) ? (
          <NavItemSelected>{children}</NavItemSelected>
        ) : (
          <NavItemStyle>{children}</NavItemStyle>
        )}
      </Link>
    </div>
  );
};

export default NavItem;

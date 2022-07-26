import React from "react";
import {
  HeaderHomePage,
  Icon,
  IconPage,
  IconText,
  Navigation,
  LiNavigation,
} from "./TopbarStyled";

import { Link } from "react-router-dom";

const Topbar = () => {
  const backTop = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div>
      <HeaderHomePage>
        <Link to="/">
          <Icon>
            <IconPage />
            <IconText>Suwj</IconText>
          </Icon>
        </Link>

        <Navigation>
          <LiNavigation>
            <Link to="/" style={{ color: "#fff" }}>
              Home
            </Link>
          </LiNavigation>
          <LiNavigation>
            <Link to="/class" style={{ color: "#fff" }}>
              Manage
            </Link>
          </LiNavigation>
          <LiNavigation>
            <Link to="/student" style={{ color: "#fff" }}>
              View
            </Link>
          </LiNavigation>
          <LiNavigation>
            <div style={{ color: "#fff" }} onClick={backTop}>
              About
            </div>
          </LiNavigation>
        </Navigation>
      </HeaderHomePage>
    </div>
  );
};

export default Topbar;

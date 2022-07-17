import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import {
  HeaderTotal,
  HomePageWrapper,
  HeaderHomePage,
  Icon,
  IconPage,
  IconText,
  Navigation,
  LiNavigation,
  ContentHeader,
  HeadingContent,
  ContentDescription,
  ContentButton,
  ButtonManage,
  ButtonView,
} from "./HeaderStyed";
import Topbar from "../Topbar";

import "../style.css";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const Header = () => {
  const backTop = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <HeaderTotal>
      <HomePageWrapper className="home-Page_Wrapper">
        <Topbar />

        <ContentHeader>
          <HeadingContent>Looking back at 2022 </HeadingContent>

          <ContentDescription>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis. Nunc sagittis purus ipsum, ac mollis
              elit iaculis ut. Mauris egestas arcu ut ex blandit pulvinar.
              Mauris nibh risus, imperdiet et mauris vitae, auctor vulputate
              est.
            </p>
          </ContentDescription>
          <ContentButton>
            <ButtonManage>
              <Link to="/class" style={{ color: "#fff" }}>
                Manage Class
              </Link>
            </ButtonManage>
            <ButtonView>
              <Link to="/student" style={{ color: "#fff" }}>
                View Student
              </Link>
            </ButtonView>
          </ContentButton>
        </ContentHeader>
      </HomePageWrapper>
    </HeaderTotal>
  );
};

export default Header;

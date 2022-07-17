import {
  FooterWrapper,
  FooterCopyright,
  FooterIcon,
  FooterSocial,
  UlFooterSocial,
  LiFooterSocial,
  LinkSocial,
} from "./FooterStyled";
import { Icon, IconPage, IconText } from "../Header/HeaderStyed";

const FooterHomePage = () => {
  return (
    <FooterWrapper>
      <FooterCopyright>
        © 2022 The President and Fellows of University
      </FooterCopyright>
      <FooterIcon>
        <Icon>
          <IconPage />
          <IconText>Suwj</IconText>
        </Icon>
      </FooterIcon>
      <FooterSocial>
        <UlFooterSocial>
          <LiFooterSocial>
            <LinkSocial href="https://www.facebook.com/suwj66/" target="_blank">
              Facebook
            </LinkSocial>
          </LiFooterSocial>
          <LiFooterSocial>
            <LinkSocial
              href="https://www.instagram.com/suwj__/"
              target="_blank"
            >
              Instagram
            </LinkSocial>
          </LiFooterSocial>
          <LiFooterSocial>
            <LinkSocial
              href="https://www.youtube.com/channel/UCzfSwhDvIGYV7B0GuSsoMOg"
              target="_blank"
            >
              Youtube
            </LinkSocial>
          </LiFooterSocial>
        </UlFooterSocial>
      </FooterSocial>
    </FooterWrapper>
  );
};

export default FooterHomePage;

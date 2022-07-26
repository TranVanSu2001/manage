import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #0e0e0e;
  min-height: 8vh;
  min-width: 100vw;
  padding: 3.5rem 2rem 1.5rem;
  color: #89969b;
  display: flex;
  justify-content: space-around;
`;
export const FooterCopyright = styled.div``;
export const FooterIcon = styled.div``;

export const FooterSocial = styled.div``;
export const UlFooterSocial = styled.ul`
  display: flex;
`;
export const LiFooterSocial = styled.li`
  margin: 0 1.5rem;
  list-style: none;
`;
export const LinkSocial = styled.a`
  color: #89969b;
  padding: 2px 0;
  &:hover {
    color: #f3f4f4;
    border-bottom: 1px solid #f3f4f4;
  }
`;

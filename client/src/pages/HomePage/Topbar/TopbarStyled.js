import styled from "styled-components";
import { IoLogoOctocat } from "react-icons/io";

export const HeaderHomePage = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  background-color: #173fd7;
`;

export const Icon = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-right: auto;
`;

export const IconText = styled.div`
  color: #fff;
  font-size: 1.8rem;
  align-items: center;
  margin-left: 5px;
`;

export const IconPage = styled(IoLogoOctocat)`
  font-size: 50px;
  fill: #5e89fc;
  cursor: pointer;
`;

export const Navigation = styled.ul`
  color: #fff;

  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const LiNavigation = styled.li`
  margin: 0.3rem 2rem;
  color: #fff;
  list-style-type: none;
  font-size: 1.2rem;
  position: relative;

  &::after {
    content: "";
    height: 3px;
    width: 0;
    background: #009688;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

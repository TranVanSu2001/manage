import styled from "styled-components";
import { IoLogoOctocat } from "react-icons/io";

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

export const HeaderTotal = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`;

export const HomePageWrapper = styled.div`
  max-width: 100vw;
`;

export const IconPage = styled(IoLogoOctocat)`
  font-size: 50px;
  fill: #5e89fc;
  cursor: pointer;
`;

export const ContentHeader = styled.nav`
  margin-top: 4rem;
  color: red;
  text-align: center;
`;

export const HeadingContent = styled.h1`
  color: #fff;
  font-size: 2.8rem;
`;

export const ContentDescription = styled.div`
  color: #fff;
  max-width: 70rem;
  text-align: center;
  margin: 2rem auto;
  font-size: 1.1rem;
`;

export const ContentButton = styled.div``;

export const ButtonManage = styled.button`
  width: 16rem;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #009688;
  background: transparent;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    background: #009688;
    height: 100%;
    width: 0;
    border-radius: 25px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    border: none;
  }
`;

export const ButtonView = styled.button`
  width: 16rem;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #009688;
  background: transparent;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: "";
    background: #009688;
    height: 100%;
    width: 0;
    border-radius: 25px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;

    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    border: none;
  }
`;

export const BackTopScroll = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
`;

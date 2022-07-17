import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";

export const ContentDetails = styled.div`
  min-width: 100vw;
  padding-top: 1.2rem;
  background-color: #f3f4f4;
`;

export const HeadingDetail = styled.h1`
  color: #333333;

  display: flex;
  align-items: center;
  position: relative;
  background-color: #f3f4f4;
  justify-content: space-between;
`;

export const H1Detail = styled.h1`
  text-align: center;
  padding: 2rem 5rem;
  color: #333333;
  font-size: 3rem;
  margin-right: auto;
  flex-basis: 50%;
  background-color: #f3f4f4;
  border-right: 1px solid #656f77;
`;

export const H2Description = styled.div`
  padding: 0 8rem 0 0;
  font-size: 1.3rem;
`;

export const TableDetail = styled.div`
  margin: 0 auto;
  min-width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 6rem;
`;

export const TableElement = styled.div`
  height: 450px;
  flex-basis: 23.3333%;
  /* padding: 0.2rem; */
  margin: 1.5rem;
  transition: transform 0.2s;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const TableElementDescription = styled.div`
  background-color: #e3e5e5;
  padding: 1rem 1rem 0 2rem;
  flex: 1;
`;

export const TabelElementView = styled.div`
  width: 100%;
  padding: 0;
  margin-top: 4.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ReadButtonTableElement = styled(BsFillArrowRightCircleFill)`
  fill: #656f77;
  font-size: 2rem;
  cursor: pointer;
`;
export const ButtonElementDes = styled.div`
  align-items: center;
  margin-left: 0.8rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const DetailsInfo = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
`;

export const DetailInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ImgDetailInfo = styled.div`
  max-width: 60%;
  min-height: 100%;
  flex-basis: 55%;
  display: flex;
  overflow: hidden;
`;

export const DetailInfoText = styled.div`
  flex-basis: 45%;

  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const InfoRow = styled.div`
  padding: 1rem 0;
  min-height: 30%;
  margin: 0.5rem 0;
  display: flex;
  border-bottom: 1px solid black;
`;

export const InfoRowText = styled.div`
  padding: 0 0.12rem 0 1rem;
  flex-basis: 70%;
`;

export const InfoRowImg = styled.div`
  flex-basis: 35%;
  min-height: 100%;
  background-color: green;
  display: flex;
  overflow: hidden;
`;

export const YtbPlayVid = styled.a`
  margin: 7rem auto 0;
  max-width: 60vw;
  min-height: 100vh;
  display: flex;
  padding: 7rem 0;
`;

export const PlayBnYtb = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 1.5rem;
  top: 83%;
`;

export const BtnYtbPlay = styled(AiOutlinePlayCircle)`
  margin: 1rem;
  font-size: 2.3rem;
  fill: red;
`;

export const BtnYtbText = styled.p`
  color: #fff;
  margin: auto 0;
  font-size: 1.5rem;
  position: relative;
`;

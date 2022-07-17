import {
  ContentDetails,
  H1Detail,
  HeadingDetail,
  H2Description,
  TableDetail,
  TableElement,
  TableElementDescription,
  TabelElementView,
  ReadButtonTableElement,
  ButtonElementDes,
  DetailsInfo,
  DetailInfoWrapper,
  ImgDetailInfo,
  DetailInfoText,
  InfoRow,
  InfoRowText,
  InfoRowImg,
  YtbPlayVid,
  PlayBnYtb,
  BtnYtbPlay,
  BtnYtbText,
} from "./DetailStyle";
import "../style.css";
import { notification, BackTop } from "antd";
import { SmileOutlined, ArrowUpOutlined } from "@ant-design/icons";
const openNotification = () => {
  notification.open({
    message: "Chưa có gì để học, thông cảm!",

    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};

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

const Details = () => {
  return (
    <ContentDetails>
      <HeadingDetail>
        <H1Detail>The year at FPT</H1Detail>
        <H2Description>
          These were some of the big moments from 2022 at FPT.
        </H2Description>
      </HeadingDetail>
      <TableDetail>
        <TableElement className="TableElement">
          <div className="wrapper-img">
            <div className="table-img"></div>
          </div>
          <TableElementDescription className="TableElementDescription">
            <h2 className="TableElementDescriptionH2">January</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis.
            </p>
            <TabelElementView
              className="TabelElementView"
              onClick={openNotification}
            >
              <ReadButtonTableElement className="ReadButtonTableElement" />
              <ButtonElementDes>Read about the poem</ButtonElementDes>
            </TabelElementView>
          </TableElementDescription>
        </TableElement>
        <TableElement className="TableElement">
          <div className="wrapper-img">
            <div className="table-img"></div>
          </div>
          <TableElementDescription className="TableElementDescription">
            <h2 className="TableElementDescriptionH2">January</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis.
            </p>
            <TabelElementView
              className="TabelElementView"
              onClick={openNotification}
            >
              <ReadButtonTableElement className="ReadButtonTableElement" />
              <ButtonElementDes>Read about the poem</ButtonElementDes>
            </TabelElementView>
          </TableElementDescription>
        </TableElement>
        <TableElement className="TableElement">
          <div className="wrapper-img">
            <div className="table-img"></div>
          </div>
          <TableElementDescription className="TableElementDescription">
            <h2 className="TableElementDescriptionH2">January</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis.
            </p>
            <TabelElementView
              className="TabelElementView"
              onClick={openNotification}
            >
              <ReadButtonTableElement className="ReadButtonTableElement" />
              <ButtonElementDes>Read about the poem</ButtonElementDes>
            </TabelElementView>
          </TableElementDescription>
        </TableElement>
        <TableElement className="TableElement">
          <div className="wrapper-img">
            <div className="table-img"></div>
          </div>
          <TableElementDescription className="TableElementDescription">
            <h2 className="TableElementDescriptionH2">January</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis.
            </p>
            <TabelElementView
              className="TabelElementView"
              onClick={openNotification}
            >
              <ReadButtonTableElement className="ReadButtonTableElement" />
              <ButtonElementDes>Read about the poem</ButtonElementDes>
            </TabelElementView>
          </TableElementDescription>
        </TableElement>
        <TableElement className="TableElement">
          <div className="wrapper-img">
            <div className="table-img"></div>
          </div>
          <TableElementDescription className="TableElementDescription">
            <h2 className="TableElementDescriptionH2">January</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis.
            </p>
            <TabelElementView
              className="TabelElementView"
              onClick={openNotification}
            >
              <ReadButtonTableElement className="ReadButtonTableElement" />
              <ButtonElementDes>Read about the poem</ButtonElementDes>
            </TabelElementView>
          </TableElementDescription>
        </TableElement>
        <TableElement className="TableElement">
          <div className="wrapper-img">
            <div className="table-img"></div>
          </div>
          <TableElementDescription className="TableElementDescription">
            <h2 className="TableElementDescriptionH2">January</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales laoreet facilisis.
            </p>
            <TabelElementView
              className="TabelElementView"
              onClick={openNotification}
            >
              <ReadButtonTableElement className="ReadButtonTableElement" />
              <ButtonElementDes>Read about the poem</ButtonElementDes>
            </TabelElementView>
          </TableElementDescription>
        </TableElement>
      </TableDetail>

      <DetailsInfo>
        <HeadingDetail>
          <H1Detail>The world in 2022</H1Detail>
          <H2Description>
            These were some of the big moments from 2022.
          </H2Description>
        </HeadingDetail>
        <DetailInfoWrapper>
          <ImgDetailInfo>
            <div className="img-detail_info"></div>
          </ImgDetailInfo>
          <DetailInfoText>
            <InfoRow>
              <InfoRowText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sodales laoreet facilisis.
              </InfoRowText>
              <InfoRowImg>
                <div className="img-detail-row"></div>
              </InfoRowImg>
            </InfoRow>
            <InfoRow>
              <InfoRowText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sodales laoreet facilisis.
              </InfoRowText>
              <InfoRowImg>
                <div className="img-detail-row"></div>
              </InfoRowImg>
            </InfoRow>
            <InfoRow>
              <InfoRowText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sodales laoreet facilisis.
              </InfoRowText>
              <InfoRowImg>
                <div className="img-detail-row"></div>
              </InfoRowImg>
            </InfoRow>
          </DetailInfoText>
        </DetailInfoWrapper>
      </DetailsInfo>

      <YtbPlayVid
        href="https://www.youtube.com/watch?v=UVbv-PJXm14"
        target="_blank"
        className="YtbPlayVid"
      >
        <div className="img-ytb-player">
          <PlayBnYtb className="PlayBnYtb">
            <BtnYtbPlay className="BtnYtbPlay" />
            <BtnYtbText className="BtnYtbText">2022 in a flash</BtnYtbText>
          </PlayBnYtb>
        </div>
      </YtbPlayVid>

      <BackTop>
        <div style={style}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </ContentDetails>
  );
};

export default Details;

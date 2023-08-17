import React from 'react';
import { Grid, Layout, theme, Typography, Avatar, Space } from "antd";
import { HEADER_HEIGHT } from '../Ḥelper/contant';
import { UserOutlined } from "@ant-design/icons";
import Images from '../Ḥelper/Images';
const { Header, Footer, Sider, Content } = Layout;
const Hearder = () => {

  const token = theme.useToken().token;
  const style = {
    header: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: token.colorTextLightSolid,
      height: HEADER_HEIGHT,
      backgroundColor: "#1C2536",
      fontFamily: token.fontFamily,
    },
    text_style: {
      color: '#ffff'
    },
    icon_wrapper: {
      display: "flex",
      alignItems: "center",
    },
    iconWrapper: {
      display: "flex",
      width: "2rem",
      height: "2rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6.25rem",
      marginLeft: "1rem",
    },
    notification_icon: {
      width: "1.5rem",
      height: "1.5rem",
    },
  }


  return (
    <>
      <Layout.Header style={style.header}>
        TradingSchool{" "}
        <div style={style.icon_wrapper}>
          <div style={{ ...style.iconWrapper, marginLeft: "4rem" }}>
            <img
              src={Images.svg.bell_Icon}
              alt="coin"
              style={style.notification_icon}
            />
          </div>
          <div style={style.iconWrapper}>
            <Avatar size={"small"} icon={<UserOutlined />} />
          </div>
        </div>
      </Layout.Header>
    </>
  );
}

export default Hearder;
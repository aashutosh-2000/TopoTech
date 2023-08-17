import { Grid, Layout, theme, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

// import Images from "../../Helper/Image";
// import { HEADER_HEIGHT } from "../../Helper/constant";
// const { useBreakpoint } = Grid;

const Header = () => {
  // const breakpoint = useBreakpoint();
  // const isMobile = breakpoint.xs || (breakpoint.sm && !breakpoint.md);

  const token = theme.useToken().token;
  const style = {
    header: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: token.colorTextLightSolid,
      height: HEADER_HEIGHT,
      backgroundColor: token.colorPrimary,
      fontFamily: token.fontFamily,
    },
    coinsText: {
      margin: 0,
      marginLeft: "0.5rem",
      color: token.colorTextLightSolid,
      display: "flex",
      alignItems: "center",
      fontSize: token.fontSizeHeading5,
    },
    icon_wrapper: {
      display: "flex",
      alignItems: "center",
    },
    iconWrapper: {
      display: "flex",
      width: "3rem",
      height: "3rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6.25rem",
      background: token.colorPrimaryLight,
      marginLeft: "1rem",
    },
    notification_icon: {
      width: "1.5rem",
      height: "1.5rem",
    },
  };

  return (
    <>
      <Layout.Header style={style.header}>
        TradingSchool{" "}
        <div style={style.icon_wrapper}>
          <img src={Images.svg.coin} alt="coin" width={24} height={24} />
          <Typography.Title level={2} style={style.coinsText}>
            {new Intl.NumberFormat("en-US").format(50000)} Coins
          </Typography.Title>
          {/* <div style={{ ...style.iconWrapper, marginLeft: "4rem" }}>
            <img
              src={Images.svg.notification}
              alt="coin"
              style={style.notification_icon}
            />
          </div> */}
          <div style={style.iconWrapper}>
            <Avatar size={"small"} icon={<UserOutlined />} />
          </div>
        </div>
      </Layout.Header>
    </>
  );
};

export default Header;

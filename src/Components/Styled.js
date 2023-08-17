import { ThemeProvider } from "styled-components";
import { theme } from "antd";
import React from "react";

const Styled = ({ children }) => {
  const { token } = theme.useToken();
  return (
    <ThemeProvider theme={{ token: token, base: { color: "mediumseagreen" } }}>
      {children}
    </ThemeProvider>
  );
};
export default Styled;
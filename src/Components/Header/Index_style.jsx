import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { NAVBAR } from "../../Helper/constant";
// const Button = styled.button`
//   color: ${(props) => {
//     console.log("props.theme: ", props.theme);
//     return props.theme.antd.colorPrimary;
//   }};
// `;
const activeStyles = css`
  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: white;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const activeStylesMobile = css`
  border: 1px solid black;
  color: white;
  border-radius: 10px;
  background-color: #565656;
`;
const activeStylesSubMenu = css`
  /* background-color: #e6f4ff; */
  color: #1677ff;
  border-radius: 10px;
`;
const NavbarStyle = {
  Wrapper: styled.nav`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: ${NAVBAR.BACKGROUND_COLOR};
    align-self: flex-start;
    padding-inline: 2rem;
    height: ${NAVBAR.HEIGHT};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.h1`
    color: white;
    font-weight: normal;
    font-size: 2rem;
  `,
  Items: styled.div`
    height: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
  `,
  Item: styled(NavLink)`
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    height: ${NAVBAR.HEIGHT};
    cursor: pointer;
    text-decoration: none;
    padding-inline: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;
    ${(props) => props.$isActive && !props.$isMobile && activeStyles}
    ${(props) =>
      props.$isActive &&
      props.$isMobile &&
      !props.$subMenu &&
      activeStylesMobile}
    ${(props) => props.$isActive && props.$subMenu && activeStylesSubMenu}
  `,
  //dropdown from antd

  IconButton: styled.button`
    color: white;
    font-size: 1.4rem;
    padding: 0 1rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.8;
    }
  `,
};
export default NavbarStyle;

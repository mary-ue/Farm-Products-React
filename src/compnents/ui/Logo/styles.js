import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMainPage = styled.div`
  ${logoStyle}
`;

export const Text = styled.p`
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.15;
  color: ${props => props.theme.colorBlackForText};
`;
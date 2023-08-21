import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
  display: block;
  padding: 0 24px;
  min-height: 60px;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeDefault};
  min-width: ${props => props.$minWidth ? `${props.$minWidth}px` : '100%'};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorForBtnAndCheckbox};
  text-align: center;
  text-decoration: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color .3s ease-out, box-shadow .3s ease-out;

  &:hover, 
  &:active {
    background-color: ${props => props.theme.colorForBtnHover};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
    pointer-events: none;
  }
`;


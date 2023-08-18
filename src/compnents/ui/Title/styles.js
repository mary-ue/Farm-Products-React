import styled from "styled-components";
import { TitleSize } from "./Title";

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: ${props => props.marginBottom || 0}px;
  padding: 0;
  font-weight: 700;
  line-height: calc(41 / 36);
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.$size === TitleSize.BIG ) {
      fontSize = '44px';
    }
    if (props.$size === TitleSize.MEDIUM) {
      fontSize = '24px';
    }
    if (props.$size === TitleSize.SMALL ) {
      fontSize = '18px';
    }
    return fontSize;
  }};
`;


import styled from "styled-components";
import { Container } from "../Container/Container";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.10);
`;

export const StyledContainer = styled(Container)`
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

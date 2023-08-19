import styled from "styled-components";

export const Panel = styled.div`
  padding: 24px 20px;
  margin-bottom: ${props => props.$marginBottom || 0}px;
  background-color: ${props => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.10);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;
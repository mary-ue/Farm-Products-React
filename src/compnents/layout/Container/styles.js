import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  margin: 0 auto;
  padding-left: ${props => props.theme.pagePadding};
  padding-right: ${props => props.theme.pagePadding};
`;
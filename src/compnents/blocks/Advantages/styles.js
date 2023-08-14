import styled from "styled-components";
import { Container } from "../../layout/Container/Container.jsx";
import { Ul } from "../../styled/index.js";

export const AdvantagesContainer = styled(Container)`
  padding-top: ${props => props.theme.sectionPadding};
  padding-bottom: ${props => props.theme.sectionPadding};
  display: grid;
  justify-items: center;
  gap: 64px;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
`;

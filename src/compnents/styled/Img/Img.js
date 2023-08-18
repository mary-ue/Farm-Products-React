import styled from 'styled-components';

export const Img = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
  background-color: ${props => props.theme.colorForSectionHero};
`;
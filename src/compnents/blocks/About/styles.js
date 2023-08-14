import styled from "styled-components";
import { Container } from "../../layout/Container/Container";

export const StyledSectionAbout = styled.section`
  padding-top: 183px;
  padding-bottom: 183px;
  position: relative;
  z-index: 1;
  min-height: 600px;
  background-color: #d8ecfe;
`;

export const StyledContainerAbout = styled(Container)`
  position: relative;

&::before {
  content: '';
  position: absolute;
  right: 177px;
  bottom: -183px;
  z-index: 5;
  display: block;
  width: 273px;
  height: 627px;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-image: url('../../../assets/img/HeroSvg.svg');
}

&::after {
  content: '';
  position: absolute;
  right: 90px;
  bottom: -106px;
  display: block;
  width: 446px;
  height: 447px;
  background-repeat: no-repeat;
  background-image: url('../../../assets/img/HeroSvg_2.svg');
}
`;

export const ContentWrapperAbout = styled.div`
  max-width: 600px;
`;

export const TextAbout = styled.p`
  margin-top: 24px;
  padding-right: 110px;
  font-size: 18px;
  line-height: 150%;
`;


// }

// .text {div
import styled from "styled-components";
import {Img} from '../../styled/Img/Img';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 20px;
`;

export const ProductImg = styled(Img)`
  margin-right: 20px;
  aspect-ratio: 1 / 1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding-bottom: 30px;
  min-height: 248px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.colorForSectionHero};
`;

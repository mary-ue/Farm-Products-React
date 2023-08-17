import styled from 'styled-components';
import { Container } from '../../layout/Container/Container';
import { Swiper } from 'swiper/react';

const leftWidth = '353px';

export const OrderContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const LeftColumn = styled.div`
  flex: 0 0 ${leftWidth};
`;

export const PriceLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
`;

export const PriceValue = styled.p`
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0 }px;
  font-size: large;
  font-weight: bold;
`;

export const RightColumn = styled.div`
  flex: 1;
  height: min-content;
  background-color: yellow;
`;

export const ProductsSwiper = styled(Swiper)`
  width: 100%;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
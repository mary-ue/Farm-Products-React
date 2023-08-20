import styled, { css } from 'styled-components';
import { Container } from '../../layout/Container/Container';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

import checkboxSelect from '../../../assets/img/Checkbox.svg';
import { Price } from '../../ui/ProductCard/styles';
import { TotalPrice } from '../../ui/Price/Price';

const leftWidth = '353px';

export const Main = styled.main`
  background-color: ${props => props.theme.colorGray};
`;

export const OrderContainer = styled(Container)`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
`;

export const Form = styled.form`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  padding-top: 40px;
  padding-bottom: 0;
  display: flex;
  gap: 20px;
  max-width: 1100px;
`;

export const LeftColumn = styled.div`
  flex: 0 0 ${leftWidth};
  overflow-y: overlay;
`;

export const PriceLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
`;

export const PriceValue = styled(TotalPrice)`
  margin-bottom: ${props => props.$marginBottom ? props.$marginBottom : 0 }px;
`;

export const RightColumn = styled.div`
  flex: 1;
  height: min-content;
`;

export const ProductsSwiper = styled(Swiper)`
  width: 100%;
  height: calc(100vh - 200px);

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 18px;
  text-align: left;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    display: block;
    width: 22px;
    height: 22px;

    ${(props) => props.$isChecked ? css`
      background-color: #fc9b27;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-image: url(${checkboxSelect});
      background-repeat: no-repeat;
      background-position: center center;
    `
    : css`
      background-color: ${props.theme.colorGray};
      border: 1px solid rgba(0, 0, 0, 0.1);
    `
    }
  }
`;
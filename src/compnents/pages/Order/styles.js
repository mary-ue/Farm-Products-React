import styled, { css } from 'styled-components';
import { Container } from '../../layout/Container/Container';
import { Swiper } from 'swiper/react';
import checkboxSelect from '../../../assets/img/Checkbox.svg';

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
import { StyledPrice } from './styles';

const formatPrice = (value) => {
  const roundedPrice = Math.round(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, '$1 ');
};

export const TotalPrice = ({ value, className }) => {
  return (
    <StyledPrice className={className}>
    {formatPrice(value)} руб.
    </StyledPrice>
  );
};

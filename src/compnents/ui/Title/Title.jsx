import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: 'big', 
  MEDIUM: 'medium',
  SMALL: 'small', 
  DEFAULT: '',
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

export const Title = ({ level = 1, size, children, className, $marginBottom}) => {
  return (
    <StyledTitle
      className={className}
      as={`h${level}`}
      $size={size}
      $marginBottom={$marginBottom}
    >
      {children}
    </StyledTitle>
  )
}

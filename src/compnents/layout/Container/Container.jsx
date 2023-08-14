import { StyledContainer } from "./styles";

export const Container = ({children, className}) => {

  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}
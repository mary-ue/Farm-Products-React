import { Logo } from "../../ui/Logo/Logo";
import { StyledContainer, StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
    <StyledContainer>
      <Logo />
      <p>Создано {new Date().getFullYear()}</p>
    </StyledContainer>
    </StyledFooter>
  )
}
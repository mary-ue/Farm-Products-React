import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../Nav/Nav';
import { StyledContainer, StyledHeader } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <Nav />
      </StyledContainer>
    </StyledHeader>
  )
}
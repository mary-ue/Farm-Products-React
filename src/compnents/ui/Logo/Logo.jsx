import { ReactComponent as LogoImg } from '../../../assets/img/Logo.svg';
import { Text, StyledLogo } from './styles.js';

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <LogoImg />
      <Text>Фермерские&nbsp;продукты</Text>
    </StyledLogo>
  )
}
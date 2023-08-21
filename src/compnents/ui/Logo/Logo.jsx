import { useLocation } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../../../assets/img/Logo.svg';
import { AppRoute } from '../../../const';
import { Text, StyledLogo, StyledLogoMainPage } from './styles.js';

export const Logo = () => {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImg />
      <Text>Фермерские&nbsp;продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImg />
      <Text>Фермерские&nbsp;продукты</Text>
    </StyledLogo>
  )
}
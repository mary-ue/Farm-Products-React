import { Container } from "../Container/Container";
import { ReactComponent as Logo } from '../../../assets/img/Logo.svg';
import s from './Footer.module.css';

export const Footer = () => {
  return (
    <Container className={s.FooterContainer}>
      <Logo />
      <p className={s.FooterCopy}>Создано {new Date().getFullYear()}</p>
    </Container>
  )
}
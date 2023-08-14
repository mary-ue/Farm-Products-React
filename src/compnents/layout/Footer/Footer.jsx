import { Logo } from "../../ui/Logo/Logo";
import { Container } from "../Container/Container";
import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
    <Container className={s.container}>
      <Logo />
      <p className={s.copy}>Создано {new Date().getFullYear()}</p>
    </Container>
    </footer>
  )
}
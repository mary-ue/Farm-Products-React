import { ReactComponent as Logo } from '../../../assets/img/Logo.svg';
import { Container } from '../Container/Container';
import { Nav } from '../Nav/Nav';
import s from './Header.module.css';

export const Header = () => {


  return (
    <header className={s.header}>
      <Container className={s.container}>
        <Logo />
        <Nav />
      </Container>
    </header>
  )
}
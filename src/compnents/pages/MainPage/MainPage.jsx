import { Container } from "../../layout/Container/Container";
import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import s from "./MainPage.module.css";

export const MainPage = () => {


  return (
    <>
    <Header />
    <Container className={s.MainContainer}>
      
    </Container>
    <Footer />
    </>
  )
}
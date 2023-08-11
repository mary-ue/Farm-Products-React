import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";
import s from './PageWrapper.module.css';

export const PageWrapper = () => {


  return (
    <>
    <Header />
    <main className={s.PageWrapper_main}>
      <MainPage />
    </main>
    <Footer />
    </>
  )
}
import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";
import s from './PageWrapper.module.css';

export const PageWrapper = ({advantages}) => {
  

  return (
    <>
    <Header />
    <main className={s.pageWrapper_main}>
      <MainPage advantages={advantages} />
    </main>
    <Footer />
    </>
  )
}
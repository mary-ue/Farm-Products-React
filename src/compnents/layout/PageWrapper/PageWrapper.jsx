import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";

export const PageWrapper = () => {


  return (
    <>
    <Header />
    <main>
      <MainPage />
    </main>
    <Footer />
    </>
  )
}
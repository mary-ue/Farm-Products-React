import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { Order } from "../../pages/Order/Order";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Main, StyledWrapper } from "./styles";

export const PageWrapper = ({ products }) => {
  

  return (
    <>
    <Header />
    <Main>
      {/* <MainPage advantages={advantages} /> */}
      <Order products={products}  />
    </Main>
    <Footer />
    </>
  )
}
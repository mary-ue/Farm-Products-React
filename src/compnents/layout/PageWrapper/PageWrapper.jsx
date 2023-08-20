import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { Order } from "../../pages/Order/Order";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Main, StyledWrapper } from "./styles";

export const PageWrapper = ({ products }) => {
  

  return (
    <>
    <Header />
      {/* <MainPage advantages={advantages} /> */}
      <Order products={products}  />
    <Footer />
    </>
  )
}
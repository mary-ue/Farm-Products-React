import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { Order } from "../../pages/Order/Order";
import { MainPage } from "../../pages/MainPage/MainPage";
import { StyledWrapper } from "./styles";

export const PageWrapper = ({ products }) => {
  

  return (
    <>
    <Header />
    <StyledWrapper>
      {/* <MainPage advantages={advantages} /> */}
      <Order products={products}  />
    </StyledWrapper>
    <Footer />
    </>
  )
}
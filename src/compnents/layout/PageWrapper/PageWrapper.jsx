import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";
import { StyledWrapper } from "./styles";

export const PageWrapper = ({advantages}) => {
  

  return (
    <>
    <Header />
    <StyledWrapper>
      <MainPage advantages={advantages} />
    </StyledWrapper>
    <Footer />
    </>
  )
}
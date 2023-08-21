import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";
import { Outlet } from "react-router-dom";

export const PageWrapper = ({ products }) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
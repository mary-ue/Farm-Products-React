import { PageWrapper } from './compnents/layout/PageWrapper/PageWrapper';
import { GlobalStyle } from "./styles";
import advantages from "./mocks/advantages.js";
import products from './mocks/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import { MainPage } from './compnents/pages/MainPage/MainPage';
import { Order } from './compnents/pages/Order/Order';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantages} />} />
            <Route path={AppRoute.ORDER.replace(AppRoute.MAIN, '')} element={<Order products={products}  /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { PageWrapper } from './compnents/layout/PageWrapper/PageWrapper';
import { GlobalStyle } from "./styles";
import advantages from "./mocks/advantages.js";
import products from './mocks/products';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantages} products={products} />
    </>
  );
}

export default App;

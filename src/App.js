import { PageWrapper } from './compnents/layout/PageWrapper/PageWrapper';
import { GlobalStyle } from "./styles";
import advantages from "./mocks/advantages.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantages} />
    </>
  );
}

export default App;

import { PageWrapper } from './compnents/layout/PageWrapper/PageWrapper';
import advantages from "./mocks/advantages.js";

function App() {
  return (
    <>
      <PageWrapper advantages={advantages} />
    </>
  );
}

export default App;

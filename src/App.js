import { Card } from "./components/Card";
import * as GlobalStyles from "./styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <Card />;
    </>
  );
}

export default App;

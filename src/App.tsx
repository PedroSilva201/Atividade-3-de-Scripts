import { ContextoProvider } from "./contexts";
import Principal from "./pages/Principal";
import "./App.css";

function App() {
  return <>
  <ContextoProvider><Principal/></ContextoProvider>
  </>
}

export default App;

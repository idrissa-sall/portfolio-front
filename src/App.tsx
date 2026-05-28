import "./App.css";
import { ENV } from "./config/env";

function App() {
  return <h1>Bonjour, {ENV.PORTFOLIO_NAME} 😎</h1>;
}

export default App;

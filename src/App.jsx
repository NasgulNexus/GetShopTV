import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterHead from "./RouterHead";

const App = () => (
  <Router basename="/GetShopTV">
    <div>
      <RouterHead />
    </div>
  </Router>
);

export default App;

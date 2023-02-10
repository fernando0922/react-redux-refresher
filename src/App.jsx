import { Provider } from "react-redux";
import "./App.css";
import BunContainer from "./components/BunContainer";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store = {store}>
      <CakeContainer />
      <BunContainer/>
    </Provider>
  );
}

export default App;

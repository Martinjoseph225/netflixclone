// import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/NavBar/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals, comedy } from "./Urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netfilx Originals" />
      <RowPost url={action} title="Action " isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
    </div>
  );
}

export default App;

import "./App.css";
import Beers from "./components/Beers";
import beersData from "./data";

function App() {
  return (
    <div className="App">
      <Beers data={beersData.cards} />
    </div>
  );
}

export default App;

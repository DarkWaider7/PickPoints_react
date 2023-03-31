import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import { data } from "./data/data.js";
import Adding from "./components/Adding";
import Filter from "./utils/Filter";

function App() {
  const [valueBudget, setValueBudget] = useState("valueBudget");
  const [isPressed, setIsPressed] = useState(false);
  const [cordinates, setCordinates] = useState({
    latitude: 54.708415,
    longitude: 55.975993,
  });

  const filter = Filter(data, valueBudget, setValueBudget);

  return (
    <div>
      <Adding
        filteredBudgets={filter.filteredBudgets}
        filterAdreess={filter.filterAdreess}
        setValueBudget={setValueBudget}
        isPressed={isPressed}
        setIsPressed={setIsPressed}
        setCordinates={setCordinates}
      />
      <Map coordinates={cordinates} />
    </div>
  );
}

export default App;

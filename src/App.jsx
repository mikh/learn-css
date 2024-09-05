import { useState } from "react";

import Basic from "./Basic";
import Direction from "./Direction";

function App() {
  const [cssConfig, setCssConfig] = useState(null);

  function handleCssConfigChange(e) {
    switch (e.target.value) {
      case "":
        setCssConfig(null);
        break;
      case "basic":
        setCssConfig(<Basic></Basic>);
        break;
      case "directions":
        setCssConfig(<Direction></Direction>);
        break;
      default:
        console.log(`Unknown value ${e.target.value}`);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">Select CSS Config</h1>
      <div>
        <select onChange={handleCssConfigChange}>
          <option value=""></option>
          <option value="basic">Basic</option>
          <option value="directions">Directions</option>
        </select>
        {cssConfig}
      </div>
    </div>
  );
}

export default App;

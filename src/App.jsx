import { useState } from "react";

import Basic from "./Basic";
import Direction from "./Direction";
import Wrap from "./Wrap";
import Justify from "./Justify";
import Align from "./Align";

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
      case "wrap":
        setCssConfig(<Wrap></Wrap>);
        break;
      case "justify":
        setCssConfig(<Justify></Justify>);
        break;
      case "align":
        setCssConfig(<Align></Align>);
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
          <option value="wrap">Wrap</option>
          <option value="justify">Justify</option>
          <option value="align">Align</option>
        </select>
        {cssConfig}
      </div>
    </div>
  );
}

export default App;

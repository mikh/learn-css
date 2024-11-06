import GridBasic from "./GridBasic";
import { useState } from "react";
import GridDisplay from "./GridDisplay";
import GridTemplate from "./GridTemplate";

export default function Grid() {
  const [cssConfig, setCssConfig] = useState(null);

  const cssConfigs = {
    "": null,
    basic: <GridBasic></GridBasic>,
    display: <GridDisplay></GridDisplay>,
    template: <GridTemplate></GridTemplate>,
  };

  function handleCssConfigChange(e) {
    setCssConfig(cssConfigs[e.target.value]);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">Select CSS Config</h1>
      <div>
        <select onChange={handleCssConfigChange}>
          {Object.keys(cssConfigs).map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
      {cssConfig}
    </div>
  );
}

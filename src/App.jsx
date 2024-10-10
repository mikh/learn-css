import { useState } from "react";

import Flex from "./Flex";
import Grid from "./Grid";

function App() {
  const [topConfig, setTopConfig] = useState(null);

  const allTopConfigs = {
    "": null,
    flex: <Flex></Flex>,
    grid: <Grid></Grid>,
  };

  const options = Object.keys(allTopConfigs).map((x) => (
    <option key={x} value={x}>
      {x}
    </option>
  ));

  function handleTopConfigChange(e) {
    if (Object.hasOwn(allTopConfigs, e.target.value)) {
      setTopConfig(allTopConfigs[e.target.value]);
    } else {
      console.log(`Unknown value: ${e.target.value}`);
      setTopConfig(null);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">Select CSS Config</h1>
      <div>
        <select onChange={handleTopConfigChange}>{options}</select>
      </div>
      {topConfig}
    </div>
  );
}

export default App;

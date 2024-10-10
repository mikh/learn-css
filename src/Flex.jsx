import { useState } from "react";

import Basic from "./Basic";
import Direction from "./Direction";
import Wrap from "./Wrap";
import Justify from "./Justify";
import Align from "./Align";
import AlignContent from "./AlignContent";
import Gap from "./Gap";
import Order from "./Order";
import Grow from "./Grow";
import Shrink from "./Shrink";
import Basis from "./Basis";
import AlignSelf from "./AlignSelf";

export default function Flex() {
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
      case "align-content":
        setCssConfig(<AlignContent></AlignContent>);
        break;
      case "gap":
        setCssConfig(<Gap></Gap>);
        break;
      case "order":
        setCssConfig(<Order></Order>);
        break;
      case "grow":
        setCssConfig(<Grow></Grow>);
        break;
      case "shrink":
        setCssConfig(<Shrink></Shrink>);
        break;
      case "basis":
        setCssConfig(<Basis></Basis>);
        break;
      case "align-self":
        setCssConfig(<AlignSelf></AlignSelf>);
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
          <option value="align-content">Align Content</option>
          <option value="gap">Gap</option>
          <option value="order">Order</option>
          <option value="grow">Grow</option>
          <option value="shrink">Shrink</option>
          <option value="basis">Basis</option>
          <option value="align-self">Align Self</option>
        </select>
      </div>
      {cssConfig}
    </div>
  );
}

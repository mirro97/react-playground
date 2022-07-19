import "./App.css";
import "./assets/css/list-n-key.css";

import { ModalSection } from "./component/Modal";
import { IfRendering, ButtonStyle } from "./IfRendering";
import { ListNoKey, ListKey } from "./component/ListKey";
import { LiftingState } from "./component/LiftingState";
import { Composition } from "./component/Composition";

function App() {
  return (
    <div className="App">
      <h2>Modal</h2>
      <ModalSection />

      <h2>조건부 랜더링</h2>
      <IfRendering />
      <ButtonStyle />

      <h2>List & Key</h2>
      <div className="list-n-key">
        <ListNoKey />
        <ListKey />
      </div>

      <h2>Lifting State</h2>
      <LiftingState />

      <h2>Composition</h2>
      <Composition />
    </div>
  );
}

export default App;

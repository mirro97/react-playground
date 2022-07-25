import { ModalSection } from "../component/Modal";
import { IfRendering, ButtonStyle } from "../IfRendering";
import { ListNoKey, ListKey } from "../component/ListKey";
import { LiftingState } from "../component/LiftingState";
import { Composition } from "../component/Composition";

export default function Basic() {
  return (
    <>
      <div className="example-section">
        <h2>Modal</h2>
        <ModalSection />
      </div>

      <div className="example-section">
        <h2>조건부 랜더링</h2>
        <IfRendering />
        <ButtonStyle />
      </div>

      <div className="example-section">
        <h2>List & Key</h2>
        <div className="list-n-key">
          <ListNoKey />
          <ListKey />
        </div>
      </div>

      <div className="example-section">
        <h2>Lifting State</h2>
        <LiftingState />
      </div>

      <div className="example-section">
        <h2>Composition</h2>
        <Composition />
      </div>
    </>
  );
}

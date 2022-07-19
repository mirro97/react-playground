import "../assets/css/composition.css";

function Composition() {
  return (
    <div className="composition">
      <div>
        <h3>props children 사용해 컴포넌트 합성 (1) </h3>
        <BigComponent />
      </div>

      <div>
        <h3>props children 사용해 컴포넌트 합성 (2) </h3>
        <SplitSection />
      </div>
    </div>
  );
}

// props children 사용해 컴포넌트 합성 (1)
function BigComponent() {
  return (
    <SmallComponent color="yellow">
      <b>합성을 위한 부모 컴포넌트 입니다</b>
      <span>JSX를 중첩해 임의의 자식을 전달 할 수 있습니다!</span>
    </SmallComponent>
  );
}

function SmallComponent(props) {
  return (
    <div className={"border-" + props.color}>
      {props.children}
      <span className="small">자식 컴포넌트입니다</span>
    </div>
  );
}

// props children 사용해 컴포넌트 합성 (2)
function SplitSection() {
  return <SideSection left={<Left />} right={<Right />} />;
}

function SideSection(props) {
  return (
    <div className="split">
      <div className="side-left">{props.left}</div>
      <div className="side-right">{props.right}</div>
    </div>
  );
}

function Left() {
  return <div>this is left</div>;
}

function Right() {
  return <div>this is right</div>;
}

export { Composition };

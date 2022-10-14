import elements from "./Sidebar.json";

import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <div className={props.open === true ? "sidebar open" : "sidebar close"}>
      {/* {!props.mediaQy && <p onClick={props.close}>Close ICON</p>} */}
      <h1>Sidebar</h1>

      {elements.sidebar.map((el) => (
        <div>
          <h5>{el}</h5>
        </div>
      ))}
    </div>
  );
}

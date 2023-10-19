import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(false);

  let styles = {
    transform: status ? `translateX(${0}px)` : `translateX(${-100}%)`,
  };

  let h3 = {
    opacity: status ? 1 : 0,
    transition: "all 2s",
  };

  let modal = {
    transform: status ? `scale(${0})` : `scale(${1})`,
  };

  return (
    <div className="App">
      <div className="navBar" style={styles}>
        <h3 style={h3}>WORKS</h3>
        <h3 style={h3}>CONTENT</h3>
        <h3 style={h3}>CONTACT</h3>
      </div>
      <div className="content" onClick={() => setStatus(!status)}>
        <div className="modal" style={modal}>
          M.
        </div>
      </div>
    </div>
  );
}

export default App;

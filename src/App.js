import "./App.css";

function App() {
  return (
    <>
      <div className="Header">Aryan Naik</div>
      <div style={{ display: "flex" }}>
        <ul style={{ margin: "0 auto" }}>
          <li>Builder</li>
          <li>Data Scientist</li>
          <li>Researcher</li>
          <li>Explorer</li>
        </ul>
      </div>
      <div
        style={{ paddingTop: "100px", paddingBottom: "100px", display: "flex" }}
      >
        <div style={{ margin: "0 auto" }}>
          <h1
            style={{
              textAlign: "center",
              Width: "600px",
              float: "left",
              marginRight: "100px",
            }}
          >
            Working on...
          </h1>
          <ul style={{ margin: "0 auto" }}>
            <li>Hack^2: HTNE + Hack for The People</li>
            <li>Harvard Erevna CVT</li>
            <li>Democratizing Data Science</li>
            <li>Exploring Web3</li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <h1 style={{ margin: "0 auto", textDecoration: "underline" }}>
          Skills
        </h1>
      </div>
    </>
  );
}

export default App;

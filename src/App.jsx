import React, { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [value, setValue] = useState("");



  return (
    <div className="App">
      <Counter/>
      <Counter/>
    </div>
  );
}
export default App;

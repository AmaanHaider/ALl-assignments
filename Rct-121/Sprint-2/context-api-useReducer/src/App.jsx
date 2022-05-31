import { useState } from "react";
import Counter from "./Counter/Counter";
import GithubFetch from "./Git/GithubFetch";

function App() {
  return (
    <div className="App">
      <Counter />
      <GithubFetch/>
    </div>
  );
}

export default App;

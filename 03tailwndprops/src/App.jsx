import { useState } from "react";
import "./App.css";
import Card from "./components/Card";  // No need for .jsx if it's resolved

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="Click Me" />
      <Card username="Ashish" />
    </>
  );
}

export default App;

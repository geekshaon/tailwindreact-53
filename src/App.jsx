import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./components/navber/Navber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navber></Navber>
    </>
  );
}

export default App;

import { useState } from "react";
import Button from "./components/Button";
function App() {
  const [color, setColor] = useState("primary");
  const handleOnClick = () => {
    setColor("secondary");
  };
  return (
    <div>
      <Button OnClick={handleOnClick} color={color}>Hello</Button>
    </div>
  );
}

export default App;

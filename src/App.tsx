import { useState } from "react";
import Button from "./components/Button";
import { Alerts } from "./components/Alerts";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const handleOnClick = () => {
    setAlertVisible(true);
  };
  const handleOnClose = () => {
    setAlertVisible(false);
  };
  return (
    <div>
      {alertVisible && (
        <Alerts OnClose={handleOnClose}>This is an alert</Alerts>
      )}
      <Button OnClick={handleOnClick}>Hello</Button>
    </div>
  );
}

export default App;

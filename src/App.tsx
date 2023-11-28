import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert.";

const App = () => {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Hellooo</Alert>
      )}

      <Button
        color="danger"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Hello World
      </Button>
    </div>
  );
};

export default App;

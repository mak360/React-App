import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button
        color="danger"
        onClick={() => {
          console.log("Yo");
        }}
      >
        Hello World
      </Button>
    </div>
  );
};

export default App;

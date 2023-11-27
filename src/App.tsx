import ListGroup from "./components/ListGroup";

const items = ["Tokyo", "Dhaka", "New York", "Munikh"];

const App = () => {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
};

export default App;

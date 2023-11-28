import ListGroup from "./components/ListGroup";

const items = ["Tokyo", "Dhaka", "New York", "Munikh", "Bon"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

const App = () => {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;

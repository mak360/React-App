import { useState } from "react";

const ListGroup = () => {
  const items = ["Tokyo", "Dhaka", "New York"];
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => setSelectedItem(index)}
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

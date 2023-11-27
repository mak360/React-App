import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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

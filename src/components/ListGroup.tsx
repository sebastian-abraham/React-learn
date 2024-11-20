import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // State Hook
  const [sIndex, setsIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/*{li.length === 0 ? <p>No items in list</p> : null}*/}
      {items.length === 0 && <p>No items in list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === sIndex ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setsIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

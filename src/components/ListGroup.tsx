import { useState } from "react";

function ListGroup() {
  let li = ["Why", "How", "wee", "This", "Cant be"];
  // State Hook
  const [sIndex, setsIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {/*{li.length === 0 ? <p>No items in list</p> : null}*/}
      {li.length === 0 && <p>No items in list</p>}
      <ul className="list-group">
        {li.map((item, index) => (
          <li
            key={item}
            className={
              index === sIndex ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setsIndex(index);
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

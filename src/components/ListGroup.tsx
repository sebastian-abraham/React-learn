function ListGroup() {
  var li = ["Why", "How", "wee", "This", "Cant be"];
  return (
    <>
      <h1>List</h1>
      {/*{li.length === 0 ? <p>No items in list</p> : null}*/}
      {li.length === 0 && <p>No items in list</p>}
      <ul className="list-group">
        {li.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

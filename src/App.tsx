import ListGroup from "./components/ListGroup";
function App() {
  let li = ["Why", "How", "wee", "This", "Cant be"];
  const handleOnSelect = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={li}
        heading="hellow"
        onSelectItem={handleOnSelect}
      ></ListGroup>
    </div>
  );
}

export default App;

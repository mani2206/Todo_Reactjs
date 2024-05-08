import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./App.css";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo")));

  const [newItem, setNewItem] = useState("");
  const [search,setSearch] = useState("")

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo", JSON.stringify(listItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    console.log(`id ${id}`);
    localStorage.setItem("todo", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const updateitem = items.filter((item) => item.id !== id);
    setItems(updateitem);
    localStorage.setItem("todo", JSON.stringify(updateitem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };
  return (
    <>
      <div className="App">
        <Header title="TODO LIST" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem
        search = {search}
        setSearch = {setSearch}
        />
        <Content
          items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;

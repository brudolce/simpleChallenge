import React from "react";
import "./styles.css";
import { useCRUD } from "./useCRUD";
import Item from "./Item";

export default function App() {
  const [value, setValue] = React.useState("");
  const { addItem, deleteItem, getItems, updateItem } = useCRUD();

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type Here"
      />
      <button
        onClick={() => {
          setValue("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}

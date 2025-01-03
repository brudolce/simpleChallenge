import React from "react";

export const useCRUD = () => {
  const [items, setItems] = React.useState([] as string[]);

  const setItemsWithStorage = (items: string[]) => {
    setItems(items);
    localStorage.setItem("items", JSON.stringify(items));
  };

  React.useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      setItems(JSON.parse(items));
    }
  }, []);
  
    const addItem = () => {
      //TODO: iteration I - Create
    };
  
  const getItems = () => {
    //TODO: iteration II - Read
  };
  
  const deleteItem = () => {
    //TODO: iteration III - Delete
  };
  
  const updateItem = () => {
    //TODO: Iteration IV - Update
  };

  return { addItem, deleteItem, getItems, updateItem };
};

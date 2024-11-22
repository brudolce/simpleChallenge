import React from "react";

interface Props {
  content: string;
  deleteItem: (item: string) => void;
  updateItem: (prev: string, next: string) => void;
}

const Item = ({ content, deleteItem, updateItem }: Props) => {
  const [edit, setEdit] = React.useState(false);
  const [value, setValue] = React.useState(content);

  return (
    <div style={{ border: "1px solid grey", padding: "12px" }}>
      <p>{content}</p>
      {edit ? (
        <>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button
            onClick={() => {
              updateItem(content, value);
              setEdit(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setValue(content);
              setEdit(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteItem(content)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Item;

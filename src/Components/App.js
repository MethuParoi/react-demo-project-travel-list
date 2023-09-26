import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packing_list";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", qnt: 1, packed: false },
  { id: 2, description: "Boarding pass", qnt: 2, packed: false },
];

export default function App() {
  const [items, setItem] = useState(initialItems);

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

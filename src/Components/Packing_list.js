import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ itemObj, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggleItems(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.qnt}
        <span>&nbsp;</span>
        {itemObj.description}
      </span>
      <button onClick={() => onDeleteItems(itemObj.id)}>❌</button>
    </li>
  );
}

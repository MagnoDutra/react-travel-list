import Item from "./Item";
import { useState } from "react";

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function PackingList({
  items,
  onRemoveItem,
  onToggleItem,
  onClearList,
}) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((item1, item2) =>
        item1.description.localeCompare(item2.description)
      );
  else if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((item1, item2) => Number(item2.packed) - Number(item1.packed));
  } else {
    sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description order</option>
        <option value="packed">Sort by packed order</option>
      </select>
      <button onClick={onClearList}>Clear list</button>
    </div>
  );
}

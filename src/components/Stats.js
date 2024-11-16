export default function Stats({ items }) {
  const numPacked = items.reduce(
    (count, item) => (item.packed ? count + 1 : count),
    0
  );

  return (
    <footer className="stats">
      <em>
        👝 You have {items.length} items on your list, and you already packed{" "}
        {numPacked}{" "}
        {items.length > 0 ? (
          <span>({(numPacked / items.length) * 100}%)</span>
        ) : null}
      </em>
    </footer>
  );
}

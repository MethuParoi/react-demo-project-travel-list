export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing lists🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked * 100) / numItems);

  return (
    <footer className="stats">
      <em className="f">
        {percent === 100
          ? "You have got everything for the trip ✈️"
          : `You have ${numItems} items on your list, You already packed ${numPacked} 
          (${percent}%)`}
      </em>
    </footer>
  );
}

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className='stats'>
        <em>Start adding some items in your packing list! 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage !== 100
          ? `👜 You have ${numItems} items in your list and you have already packed 
        ${numPacked} (${percentage}%)`
          : `You got everything. Ready to go! ✈️`}
      </em>
    </footer>
  );
}

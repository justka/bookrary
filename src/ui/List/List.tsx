export function List({
  listItems,
}: {
  listItems: { text: string; value: string }[];
}) {
  return (
    <ul>
      {listItems.map((item) => {
        return <li key={item.value}>{item.text}</li>;
      })}
    </ul>
  );
}

export default function Table({ data }) {
  return (
    <table className="w-full text-darkBGColor dark:text-darkTextColor">
      {data &&
        data.map((item, index) => (
          <tr key={`tr-${index}`}>
            {item &&
              item.map((item, index) => (
                <td
                  className="whitespace-nowrap border border-darkBGColor/25 dark:border-white/25 p-2 h-fit"
                  key={`td-${index}`}
                >
                  {item}
                </td>
              ))}
          </tr>
        ))}
    </table>
  );
}

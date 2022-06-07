export default function Button(props) {
  const { children } = props;
  return (
    <button
      className="outline-none px-6 py-2 bg-lightSecondaryColor dark:bg-darkSecondaryBGColor text-darkBGColor dark:text-darkTextColor active:scale-95 hover:scale-105 transition"
      {...props}
    >
      {children}
    </button>
  );
}

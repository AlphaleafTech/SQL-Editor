import { CurrentTable, Output } from "../";

export default function Panel() {
  return (
    <div className="h-full w-full border-t-[1px] border-darkBGColor/25 dark:border-white/25 px-4">
      <div className="h-full w-full max-w-screen-xl mx-auto flex justify-between items-center">
        <CurrentTable />
        <div className="h-full w-[1px] bg-darkBGColor/25 dark:bg-white/25"></div>
        <Output />
      </div>
    </div>
  );
}

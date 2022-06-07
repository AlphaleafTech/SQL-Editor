import { CurrentTable, Output } from "../";

export default function Panel({ body, setBody }) {
  return (
    <div className="h-full md:w-full border-t-[1px] border-darkBGColor/25 dark:border-white/25 px-4 overflow-auto">
      <div className="h-full w-max md:w-full max-w-screen-xl mx-auto flex justify-between items-center">
        <CurrentTable setBody={setBody} />
        <div className="hidden md:block h-full w-[1px] bg-darkBGColor/25 dark:bg-white/25"></div>
        <Output body={body} />
      </div>
    </div>
  );
}

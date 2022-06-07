import { Button } from "../";

export default function Output({ body }) {
  const runSQL = () => {};
  return (
    <div className="h-full w-full pl-4 pt-4">
      <div className="flex justify-between items-center">
        <div className="text-darkBGColor dark:text-darkTextColor text-xl">
          Output
          <span className={"block text-sm"}>SQLite 3.37.2</span>
        </div>
        <Button onClick={runSQL}>Run SQL</Button>
      </div>
    </div>
  );
}

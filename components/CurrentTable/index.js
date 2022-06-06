import { Button } from "../";

export default function CurrentTable() {
  return (
    <div className="h-full w-full pr-4 pt-4">
      <div className="flex justify-between items-center">
        <div className="text-darkBGColor dark:text-darkTextColor text-xl">
          Current Table
        </div>
        <Button>Upload CSV</Button>
      </div>
    </div>
  );
}

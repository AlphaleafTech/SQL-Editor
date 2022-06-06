import { Button } from "../";

export default function Output() {
  return (
    <div className="h-full w-full pl-4 pt-4">
      <div className="flex justify-between items-center">
        <div className="text-darkBGColor dark:text-darkTextColor text-xl">
          Output
        </div>
        <Button>Run SQL</Button>
      </div>
    </div>
  );
}

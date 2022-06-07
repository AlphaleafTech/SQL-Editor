import { Button, convert, Table } from "../";
import axios from "axios";

import { useState } from "react";

export default function Output({ body }) {
  const [tableData, setTableData] = useState(null);

  const runSQL = async () => {
    const { data } = await axios.post("api/run", body);
    if (data.success) {
      const temp = `${data.data}`.replace(/"/g, "");
      console.log(convert(temp, 1));
      setTableData(convert(temp, 1));
    }
  };

  return (
    <div className="h-full w-full pl-4 pt-4 pb-4 grid grid-rows-[auto_1fr] gap-4">
      <div className="flex justify-between items-center">
        <div className="text-darkBGColor dark:text-darkTextColor text-xl">
          Output
          <span className={"block text-sm"}>SQLite 3.37.2</span>
        </div>
        <Button onClick={runSQL}>Run SQL</Button>
      </div>
      <div className="w-full h-full flex justify-start overflow-auto border border-darkBGColor/25 dark:border-white/25">
        <Table data={tableData} />
      </div>
    </div>
  );
}

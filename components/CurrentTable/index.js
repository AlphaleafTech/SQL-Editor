import { Button } from "../";
import { useState, useEffect } from "react";

import DefaultCSVData from "../../public/users.csv";

export default function CurrentTable() {
  const [tableData, setTableData] = useState(null);

  function readImage(file) {
    if (file.target.value && !file.target.value.endsWith(".csv")) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      let data = event.target.result;
      data = data.split("\n");
      data = data.map((line) => line.split(","));
      setTableData(data);
    });
    reader.readAsText(file.target.files[0]);
  }

  useEffect(() => {
    setTableData(DefaultCSVData);
  }, []);

  return (
    <div className="h-full w-full pr-4 pt-4 pb-4 grid grid-rows-[auto_1fr] gap-4">
      <div className="flex justify-between items-center">
        <div className="text-darkBGColor dark:text-darkTextColor text-xl">
          Current Table
        </div>
        <div className="flex justify-between items-center gap-2">
          <label className="text-sm text-darkBGColor dark:text-darkTextColor ">
            Upload CSV
          </label>
          <input
            className="w-48 block text-sm text-gray-900 bg-gray-50 border cursor-pointer dark:text-darkTextColor outline-none border-lightSecondaryColor dark:border-darkSecondaryBGColor dark:placeholder-darkTextColor p-2"
            type="file"
            content="Upload CSV"
            onChange={readImage}
            accept={".csv"}
            aria-describedby="file_input_help"
            id="file_input"
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-start overflow-auto border border-darkBGColor/25 dark:border-white/25">
        <table className="w-full text-darkBGColor dark:text-darkTextColor">
          {tableData &&
            tableData.map((item, index) => (
              <tr key={`tr-${index}`}>
                {item &&
                  item.map((item, index) => (
                    <td
                      className="border border-darkBGColor/25 dark:border-white/25 p-2"
                      key={`td-${index}`}
                    >
                      {item}
                    </td>
                  ))}
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

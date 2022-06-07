import { useState, useEffect } from "react";

import DefaultCSVData from "../../public/users.csv";

import { convert, Table } from "../";

export default function CurrentTable({ setBody }) {
  const [csvData, setCSVData] = useState(""),
    [tableData, setTableData] = useState(null);

  const readCSV = (file) => {
    if (file.target.value && !file.target.value.endsWith(".csv")) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      let data = event.target.result;
      setCSVData(data);
      setTableData(convert(data, 1)); // Convert CSV into table
    });
    reader.readAsText(file.target.files[0]);
  };

  useEffect(() => {
    setTableData(DefaultCSVData);
    setCSVData(convert(DefaultCSVData, 2)); // Store default Table data as CSV
  }, []);

  useEffect(() => {
    setBody((prev) => ({ ...prev, currentTable: csvData }));
  }, [csvData]);

  return (
    <div className="current-table h-full w-full pr-2 md:pr-4 pt-4 pb-4 grid grid-rows-[auto_1fr] gap-4">
      <div className="flex justify-between md:items-center flex-col md:flex-row gap-4">
        <div className="text-darkBGColor dark:text-darkTextColor text-xl">
          CurrentTable
          <span className={"block text-sm"}>Name of the Table</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <label className="text-sm text-darkBGColor dark:text-darkTextColor ">
            Upload CSV
          </label>
          <input
            className="w-full md:w-48 block text-sm text-gray-900 bg-gray-50 border cursor-pointer dark:text-darkTextColor outline-none border-lightSecondaryColor dark:border-darkSecondaryBGColor dark:placeholder-darkTextColor p-2"
            type="file"
            content="Upload CSV"
            onChange={readCSV}
            accept={".csv"}
            aria-describedby="file_input_help"
            id="file_input"
          />
        </div>
      </div>
      <div className="w-full h-full overflow-auto border border-darkBGColor/25 dark:border-white/25">
        <Table data={tableData} />
      </div>
    </div>
  );
}

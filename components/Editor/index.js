import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/ext-language_tools";

import { useState } from "react";

export default function Editor() {
  const [value, setValue] = useState(`-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.

SELECT * FROM Customers;`);

  return (
    <div className="max-w-screen-xl mx-auto h-full w-full">
      <div className="hidden dark:block h-full w-full">
        <AceEditor
          mode="mysql"
          theme="dracula"
          onChange={(e) => setValue(e)}
          name="DARK_EDITOR"
          height="100%"
          width="100%"
          fontSize={24}
          showPrintMargin={false}
          value={value}
          displayIndentGuides={false}
        />
      </div>
      <div className="block dark:hidden h-full w-full">
        <AceEditor
          mode="mysql"
          theme="cloud9_day"
          onChange={(e) => setValue(e)}
          name="LIGHT_EDITOR"
          height="100%"
          width="100%"
          fontSize={24}
          showPrintMargin={false}
          value={value}
          displayIndentGuides={false}
        />
      </div>
    </div>
  );
}

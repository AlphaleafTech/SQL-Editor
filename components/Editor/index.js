import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

export default function Editor() {
  return (
    <div className="max-w-screen-xl mx-auto h-full w-full">
      <AceEditor
        mode="mysql"
        theme="one_dark"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true, $displayIndentGuides: false }}
        height="100%"
        width="100%"
        fontSize={24}
        showPrintMargin={false}
        value={`-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
          
SELECT * FROM Customers;`}
        displayIndentGuides={false}
      />
    </div>
  );
}

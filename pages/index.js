import Image from "next/image";
import { Header, Panel, Editor } from "../components";

import { useEffect, useState } from "react";

export default function Home() {
  const [body, setBody] = useState({
      code: ``,
      currentTable: ``,
    }),
    [currentTheme, setCurrentTheme] = useState("");

  return (
    <div className="h-screen w-full ">
      <div className="h-full w-full grid grid-rows-layout">
        <Header setCurrentTheme={setCurrentTheme} />
        <Editor setBody={setBody} currentTheme={currentTheme} />
        <Panel body={body} setBody={setBody} />
      </div>
    </div>
  );
}

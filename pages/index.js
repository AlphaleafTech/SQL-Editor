import Image from "next/image";
import { Header, Panel, Editor } from "../components";

import { useEffect, useState } from "react";

export default function Home() {
  const [body, setBody] = useState({
    code: ``,
    currentTable: ``,
  });

  return (
    <div className="h-screen w-full ">
      <div className="h-full w-full grid grid-rows-layout">
        <Header />
        <Editor setBody={setBody} />
        <Panel body={body} setBody={setBody} />
      </div>
    </div>
  );
}

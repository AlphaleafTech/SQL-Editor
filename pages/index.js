import Image from "next/image";
import { Header, Panel } from "../components";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });
export default function Home() {
  return (
    <div className="h-screen w-full grid grid-rows-[auto_50vh_1fr]">
      <Header />
      <Editor />
      <Panel />
    </div>
  );
}

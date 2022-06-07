import Image from "next/image";
import { Header, Panel, Editor } from "../components";

export default function Home() {
  return (
    <div className="h-screen w-full ">
      <div className="h-full w-full grid grid-rows-layout">
        <Header />
        <Editor />
        <Panel />
      </div>
    </div>
  );
}

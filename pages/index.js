import Image from "next/image";
import { Header, Panel, Editor } from "../components";

export default function Home() {
  return (
    <div className="h-screen w-full grid grid-rows-[auto_50vh_1fr]">
      <Header />
      <Editor />
      <Panel />
    </div>
  );
}

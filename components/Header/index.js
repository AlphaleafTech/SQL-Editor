import Head from "next/head";
import Link from "next/link";

import { FiSun, FiMoon, FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Online SQL Editor</title>
        <meta
          name="description"
          content="Run SQL online with this editor and also use their API!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-b-[1px] border-white/25 w-full px-4">
        <div className="max-w-screen-xl m-auto flex justify-between items-center h-16 text-2xl text-darkTextColor">
          <span className="">
            Online SQL Editor
            <Link href="https://jaagrav.in/">
              <a className="text-xs block" target="_blank">
                by <span className="underline">Jaagrav</span>
              </a>
            </Link>
          </span>
          <div className="flex gap-4">
            <span>
              <FiSun className="hidden dark:block" />
              <FiMoon className="block dark:hidden" />
            </span>
            <span>
              <Link href="https://github.com/Jaagrav/SQL-Editor">
                <a target="_blank">
                  <FiGithub />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";

import { useEffect } from "react";

import { FiSun, FiMoon, FiGithub } from "react-icons/fi";

export default function Header() {
  const switchTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  useEffect(() => {
    switchTheme();
  }, []);

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
      <div className="border-b-[1px] border-darkBGColor/25 dark:border-white/25 w-full h-full px-4">
        <div className="w-full h-full max-w-screen-xl m-auto flex justify-between items-center text-2xl text-darkBGColor dark:text-darkTextColor py-2">
          <span className="">
            Online SQL Editor
            <Link href="https://jaagrav.in/">
              <a className="text-xs block" target="_blank">
                by <span className="underline">Jaagrav</span>
              </a>
            </Link>
          </span>
          <div className="flex gap-4">
            <span className="cursor-pointer" onClick={switchTheme}>
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

"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSun } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 z-50 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 p-4 px-6 border-b border-zinc-500 w-full">
        <Link href="/" className="flex items-center space-x-2 w-full">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-10"
            width="300"
            height="300"
          />
          <span className="text-2xl font-bold"> AI Code Reviewer</span>
        </Link>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 cursor-pointer rounded-lg border border-zinc-500 bg-white/[0.3] dark:bg-zinc-900/[0.3] backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
        >
          {theme === "dark" ? (
            <HiOutlineSun className="h-6 w-6" />
          ) : (
            <IoMoonOutline className="h-6 w-6" />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;

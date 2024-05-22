"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
const ThemeProviders = ({ children }: any) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="dark:bg-gray-700 dark:text-gray-200 select-none transition-colors duration-300 min-h-screen
      "
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ThemeProviders;

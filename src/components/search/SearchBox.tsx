"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between  max-w-3xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div
        className="w-full p-1  border-2 border-gray-400  placeholder-gray-500 outline-none bg-transparent 
      flex flex-row items-center rounded-lg"
      >
        <input
          className="flex-1 p-1 bg-none border-none hover:border-none
          focus:border-none focus:outline-none bg-transparent"
          type="text"
          placeholder="Search keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-white p-2 disabled:text-gray-400
          bg-amber-500 rounded-md"
          disabled={search === ""}
        >
          Search
        </button>
      </div>
    </form>
  );
}

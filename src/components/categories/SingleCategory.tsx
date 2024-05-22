"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface SingleCategoryProps {
  title: string;
  param: string;
}

const SingleCategory = ({ title, param }: SingleCategoryProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      href={`?genre=${param}`}
      className={`text-xl font-medium mx-1 relative
    ${genre === param ? "text-amber-500  " : ""}`}
    >
      <span>{title}</span>
      <span
        className={`${
          genre === param
            ? "absolute -bottom-3 left-0 right-0 w-full min-h-[1px] bg-amber-500 "
            : ""
        }`}
      ></span>
    </Link>
  );
};

export default SingleCategory;

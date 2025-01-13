import React from "react";
import { Hero } from "./sections";
import { FilterMenu, SearchBar } from "@/components";

export default function Index() {
  return (
    <>
      <Hero />

      <div className="px-40 pt-8 flex gap-5">
        <FilterMenu className="w-3/12" />
        <div className="w-9/12">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

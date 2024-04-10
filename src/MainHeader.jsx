/* eslint-disable no-unused-vars */
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  FolderOpenIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function MainHeader() {
  const [searchBrand, setSearchBrand] = useState("");

  return (
    <div>
      <header className="flex justify-between p-4 border-b-[1px] border-solid border-stone-200 pb-2 ">
        <h1 className="font-bold text-xl">Products</h1>
        <div className="flex gap-3">
          <button className="flex relative ">
            <MagnifyingGlassIcon className="w-4 h-4 mt-1 absolute left-2 cursor-pointer" />
            <div>
              <input
                type="text"
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                placeholder="Search for a Brand..."
                className="border-solid border-[1px] rounded-lg px-2  pl-7"
              />
            </div>
          </button>
          <FolderOpenIcon className="w-6 h-6  text-stone-800 bg-stone-50 border-solid border-[1px] rounded-md mr-1 p-[2px] " />
          <Cog6ToothIcon className="w-6 h-6 text-stone-800 bg-stone-50 border-solid border-[1px] rounded-md mr-1 p-[2px]" />
        </div>
      </header>
      <div className="flex justify-between px-5 p-4 border-b-[1px] border-solid border-stone-200 ">
        <ul className="flex ">
          <li className="pr-2">
            <button className="flex gap-2 border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800 ">
              <RectangleStackIcon className="w-5 h-5 mt-1" />
              All Brands
              <ChevronDownIcon className="w-5 h-5 mt-1" />
            </button>
          </li>
          <li className="pr-2">
            <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800 ">
              Desk
              <ChevronDownIcon className="w-5 h-5 mt-1" />
            </button>
          </li>
          <li className="pr-2">
            <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800">
              Tags
              <ChevronDownIcon className="w-5 h-5 mt-1" />
            </button>
          </li>
          <li className="pr-2">
            <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-semibold text-stone-500 ">
              <AdjustmentsVerticalIcon className="w-5 h-5 mt-1" />
              Sort
            </button>
          </li>
          <li className="pr-2">
            <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-semibold text-stone-500">
              <AdjustmentsHorizontalIcon className="w-5 h-5 mt-1" />
              Filter
            </button>
          </li>
        </ul>
        <ul className="flex">
          <li className="pr-2">
            <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800 ">
              <PlusCircleIcon className="w-5 h-5 mt-1" />
              Meeting
            </button>
          </li>
          <li className="pr-2">
            <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800 ">
              <FolderOpenIcon className="w-5 h-5 mt-1" />
              Import/Export
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MainHeader;

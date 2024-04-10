/* eslint-disable react/prop-types */
import {
  ChevronDownIcon,
  ChevronUpIcon,
  FolderIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function DropDownButton({ children }) {
  const [showList, setShowList] = useState(false);
  function handleClick() {
    setShowList(!showList);
  }
  return (
    <>
      <div className="flex justify-between pb-2 font-bold tracking-tighter pl-[6px] hover:bg-stone-200 hover:rounded-lg hover:p-[2px]">
        <button className="flex gap-2 " onClick={handleClick}>
          <FolderIcon className="w-4 h-4 mt-1 " />
          {children}
        </button>
        <button onClick={handleClick}>
          {showList ? (
            <ChevronUpIcon className="w-4 h-4 mt-1 " />
          ) : (
            <ChevronDownIcon className="w-4 h-4 mt-1 " />
          )}
        </button>
      </div>
      {showList && (
        <div className=" font-semibold  text-stone-700 tracking-tighter  pl-9">
          <p>Roadmap</p>
          <p>Feedback</p>
          <p>Performance</p>
          <p>Team</p>
          <p>Analytics</p>
          <p className="text-stone-400">
            <button className="flex gap-1  font-semibold text-stone-500 tracking-tighter">
              <PlusCircleIcon className="w-4 h-4 mt-1 " /> Add new sub
            </button>
          </p>
        </div>
      )}
    </>
  );
}

export default DropDownButton;

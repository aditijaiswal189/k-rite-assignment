// import { PlusIcon } from "@heroicons/react/24/outline";

import { PlusIcon } from "@heroicons/react/24/outline";
import { tableData } from "./Data/tabledata";
import TableItems from "./TableItems";

function MainTable() {
  return (
    <>
      <div className="grid grid-cols-13 grid-rows-1 gap-2 border font-bold tracking-tighter ">
        <p className="border-solid border-stone-400 border-r-[1px] p-1 px-4">
          <div className="flex gap-1 ">
            <input type="checkbox" value="brand" />
            <label className="flex gap-5  tracking-tighter ">Brand</label>
          </div>
        </p>
        <p className="border-solid border-stone-400 border-r-[1px] p-1  tracking-tighter ">
          Description
        </p>
        <p className="border-solid border-stone-400 border-r-[1px] p-[5px]">
          Members
        </p>
        <p className="border-solid border-stone-400 border-r-[1px] p-1 ">
          <button className=" tracking-tighter">Categories</button>
        </p>
        <p className="border-solid border-stone-400 border-r-[1px] p-1 ">
          <button className=" tracking-tighter ">Tags</button>
        </p>
        <p className="border-solid border-stone-400 border-r-[1px] p-1 ">
          <button className="tracking-tighter">Next Meeting</button>
        </p>
        <p className="flex justify-center items-center">
          <PlusIcon className="w-4 h-4 mt-1 " />
        </p>
      </div>
      <div>
        {tableData.map((tab) => (
          <TableItems
            tableObj={tab}
            brand={tab.brand}
            description={tab.description}
            categories={tab.categories}
            tags={tab.tags}
            nextMeeting={tab.nextMeeting}
            key={tab.brand}
            catCol={tab.catCol}
            meetCol={tab.meetCol}
          />
        ))}
      </div>
    </>
  );
}
export default MainTable;

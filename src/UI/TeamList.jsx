/* eslint-disable react/prop-types */

import { InboxStackIcon } from "@heroicons/react/24/outline";

function TeamList({ children }) {
  return (
    <li className="flex justify-between p-[6px] font-semibold tracking-tighter">
      <div className="flex gap-2">{children}</div>
      <button className="flex gap-1 text-sm text-stone-500 border-solid border-[1px] px-1 rounded-lg ">
        <InboxStackIcon className="w-4 h-4 mt-1 " /> <p>+ 1</p>
      </button>
    </li>
  );
}
export default TeamList;

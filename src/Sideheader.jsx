/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";
import {
  ServerStackIcon,
  SpeakerWaveIcon,
  CodeBracketIcon,
  PlusCircleIcon,
  PlusIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

import DropDownButton from "./UI/DropDownButton";
import TeamList from "./UI/TeamList";

function Sideheader({ children }) {
  return (
    <div className="p-3 ">
      <header className="flex justify-between  border-b-[1px] border-solid border-stone-200 pb-2">
        <div className="flex gap-2">
          <span>
            <ChartBarSquareIcon className="w-11 h-11" />
          </span>
          <div>
            <h2 className="text-stone-400 ">INC</h2>
            <h2 className="font-bold leading-3">InnovateHub</h2>
          </div>
        </div>
        <img
          src="Images/profilepic.png.png"
          alt="profile-pic "
          className="w-11 h-11"
        />
      </header>

      <div className="pb-[75px]">
        <article className="border-b-[1px] border-solid border-stone-200 py-2">
          <ul>
            <TeamList>
              <ServerStackIcon className="w-4 h-4 mt-1 " /> Design Team
            </TeamList>
            <TeamList>
              <SpeakerWaveIcon className="w-4 h-4 mt-1 " /> Marketing Team
            </TeamList>
            <TeamList>
              {" "}
              <CodeBracketIcon className="w-4 h-4 mt-1 " /> Development Team
            </TeamList>
          </ul>
        </article>
        <div className="border-b-[1px] border-solid border-stone-200 py-2">
          <button className="flex gap-2 p-[6px] font-semibold text-stone-500 ">
            <PlusCircleIcon className="w-4 h-4 mt-1 " /> Create a team
          </button>
        </div>
        <article>
          <button className="flex justify-between py-2 font-semibold text-stone-500 p-[6px] ">
            <PlusIcon className="w-4 h-4 mt-1 " />
            Folders
          </button>
          <div>
            <ul>
              <li>
                <DropDownButton>Products</DropDownButton>
              </li>

              <li>
                <DropDownButton>Sales</DropDownButton>
              </li>
              <li>
                <DropDownButton>Design</DropDownButton>
              </li>
              <li className=" pb-2 font-bold tracking-tighter pl-[6px]">
                <button className="flex gap-2 hover:bg-stone-200 hover:rounded-lg hover:p-[2px]">
                  <FolderIcon className="w-4 h-4 mt-1 " />
                  Office
                </button>
              </li>
              <li className=" pb-2 font-bold tracking-tighter pl-[6px]">
                <button className="flex gap-2 hover:bg-stone-200 hover:rounded-lg hover:p-[2px]">
                  <FolderIcon className="w-4 h-4 mt-1 " />
                  Legal
                </button>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
export default Sideheader;

import {
  QuestionMarkCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

function SideFooter() {
  return (
    <footer className="p-[6px]">
      <ul>
        <li className="flex gap-2 pb-2  pl-3 font-bold tracking-tighter ">
          <UserPlusIcon className="w-4 h-4 mt-1 " />
          Invite teammates
        </li>
        <li className="flex gap-2 pb-2 font-bold tracking-tighter pl-3">
          <QuestionMarkCircleIcon className="w-4 h-4 mt-1 " />
          Help and firststeps
        </li>
        <li className="flex justify-between p-1 font-bold tracking-tighter text-stone-700  bg-stone-300 border-solid border-[1px] rounded-lg">
          <div>
            <span className="text-stone-500 bg-stone-50 border-solid border-[1px] px-2 rounded-md mr-1  ">
              7
            </span>
            days left on trial
          </div>
          <button className="text-stone-200 bg-stone-800 border-solid border-[1px] px-2 rounded-md font-medium ">
            Add billing
          </button>
        </li>
      </ul>
    </footer>
  );
}
export default SideFooter;

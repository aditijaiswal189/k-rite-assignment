import {
  ArchiveBoxIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  EllipsisHorizontalCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function MainFooter() {
  return (
    <div className="flex justify-center mt-[200px]">
      <ul className="flex ">
        <li className="pr-2">
          <button className="flex gap-2 border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800 ">
            <DocumentMagnifyingGlassIcon className="w-5 h-5 mt-1" />
            selected
            <ClipboardDocumentCheckIcon className="w-5 h-5 mt-1" />
          </button>
        </li>
        <li className="pr-2">
          <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800 ">
            Archive
            <ArchiveBoxIcon className="w-5 h-5 mt-1" />
          </button>
        </li>
        <li className="pr-2">
          <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-bold text-stone-800">
            Delete
            <TrashIcon className="w-5 h-5 mt-1" />
          </button>
        </li>

        <li className="pr-2">
          <button className="flex gap-[2px] border-solid border-[1px] p-2 rounded-lg font-semibold text-stone-500">
            <EllipsisHorizontalCircleIcon className="w-5 h-5 mt-1" />
            More
          </button>
        </li>
      </ul>
    </div>
  );
}
export default MainFooter;

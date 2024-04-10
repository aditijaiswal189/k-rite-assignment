/* eslint-disable react/prop-types */
import CustomerImages from "./CustomerImages";

function TableItems({
  brand,
  description,
  nextMeeting,
  categories,
  tags,
  catCol,
  meetCol,
}) {
  return (
    <div className="grid grid-cols-13 grid-rows-1 gap-2 border hover:bg-stone-200 active:bg-stone-200 ">
      <p className="border-solid border-stone-400 border-r-[1px] p-1 px-4">
        <div className="flex gap-1 ">
          <input type="checkbox" value="brand" className="cursor-pointer" />
          <label className="flex gap-5 font-semibold tracking-tighter text-stone-600">
            {brand}
          </label>
        </div>
      </p>
      <p className="border-solid border-stone-400 border-r-[1px] p-1 font-semibold tracking-tighter text-stone-500">
        {description}
      </p>
      <p className="border-solid border-stone-400 border-r-[1px] p-[5px]">
        <CustomerImages />
      </p>
      <p className="border-solid border-stone-400 border-r-[1px] p-1 ">
        <button className={`${catCol} font-semibold text-sm tracking-tighter`}>
          {categories}
        </button>
      </p>
      <p className="border-solid border-stone-400 border-r-[1px] p-1 ">
        <button className="font-semibold text-sm tracking-tighter border-stone-400 border-solid border-[1px] text-stone-500 bg-stone-100 rounded-lg px-1">
          #{tags}
        </button>
      </p>
      <p className="border-solid border-stone-400 border-r-[1px] p-1 ">
        <button className={`${meetCol} font-semibold text-sm tracking-tighter`}>
          {nextMeeting}
        </button>
      </p>
      <p></p>
    </div>
  );
}
export default TableItems;

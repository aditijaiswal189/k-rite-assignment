import Sideheader from "./Sideheader";
import SideFooter from "./SideFooter";

function Sidebar() {
  return (
    <div className=" border-[1px] border-solid border-stone-200 my-4 mx-3 rounded-lg ">
      <Sideheader />
      <SideFooter />
    </div>
  );
}
export default Sidebar;

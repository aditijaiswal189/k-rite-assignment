import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import MainTable from "./MainTable";

function Mainbody() {
  return (
    <div className=" border-[1px] border-solid border-stone-200 my-4 rounded-lg w-[1000px] ">
      <MainHeader />
      <MainTable />
      <MainFooter />
    </div>
  );
}
export default Mainbody;

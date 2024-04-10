import Mainbody from "./Mainbody";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="grid grid-cols-4">
      <Sidebar className="auto-cols-max" />
      <Mainbody className="auto-cols-max" />
    </div>
  );
}
export default App;

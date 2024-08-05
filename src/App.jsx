import NewProjects from "./Components/Newproject";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import ProjectsSideBar from "./Components/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar/>
      {/* <NewProjects/> */}
      <NoProjectSelected/>
    </main>
  );
}

export default App;

import { useState } from "react";

import NewProjects from "./Components/Newproject";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import ProjectsSideBar from "./Components/ProjectsSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectsId: undefined,
    projects: [],
  });

  function handleStartAddPeoject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectsId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectState)

  let content;
  if (projectState.selectedProjectsId === null) {
    content = <NewProjects  onAdd={handleAddProject}/>;
  } else if (projectState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddPeoject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddPeoject} projects={projectState.projects}/>
      {/* <NewProjects/> */}
      {content}
    </main>
  );
}

export default App;

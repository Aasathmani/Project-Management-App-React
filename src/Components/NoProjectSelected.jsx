import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-19 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="No project select image"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
      <Button>Create a new project</Button>
      </p>
    </div>
  );
}

import Input from "./Input";
import { useRef } from "react";

export default function NewProjects({onAdd}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();


  function handleSave(){
    const enterTitle=title.current.value;
    const enterDueDate = dueDate.current.value;
    const enterDescription =description.current.value;
    

    onAdd({
      title: enterTitle,
      description: enterDescription,
      dueDate: enterDueDate,
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className=" flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2  rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text"ref={title} label={"title"} />
        <Input ref={description} label={"description"} textarea />
        <Input type="date" ref={dueDate} label={"due Date"} />
      </div>
    </div>
  );
}

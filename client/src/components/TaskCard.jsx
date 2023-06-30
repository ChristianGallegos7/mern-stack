import { useTasks } from "../context/Taskprovider";

export default function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const handleDone = (taskDone) => {
    if (taskDone === 0) {
      // task.done = 1;
    }
  };
  return (
    <div className="bg-slate-300 rounded-md p-4">
      <h1 className="text-black text-sm font-bold">{task.title}</h1>
      <p className="text-xs">{task.description}</p>
      <span>{task.done === 1 ? "✔️" : "❌"}</span>
      <span>{task.createAt}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button>Edit</button>
      <button onClick={() => handleDone(task.done)}>Toogle Task</button>
    </div>
  );
}

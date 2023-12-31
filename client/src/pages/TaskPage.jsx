import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/Taskprovider";

export default function TaskPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);
  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="font-bold text-5xl text-center pb-5">Task</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

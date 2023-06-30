import { useContext, useState } from "react";
import { getTaskRequest, deleteTaskRequest } from "../api/task.api";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("use task deberia ir dentro del provider");
  } else {
    return context;
  }
};

export const TaskContentProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function loadTasks() {
    const response = await getTaskRequest();

    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

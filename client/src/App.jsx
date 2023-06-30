import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContentProvider } from "./context/Taskprovider";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4">
        <TaskContentProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContentProvider>
      </div>
    </div>
  );
}

export default App;

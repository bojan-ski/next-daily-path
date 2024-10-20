// components
import FormNewTask from "@/components/tasksPage/FormNewTask";
import TasksList from "@/components/tasksPage/TasksList";

const Tasks = () => {
  return (
    <div className='tasks-page mt-10'>
      <div className="container">

        <FormNewTask />

        <TasksList />

      </div>
    </div>
  )
}

export default Tasks
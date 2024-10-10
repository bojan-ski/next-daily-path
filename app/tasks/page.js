// components
import PageHeader from "@/components/PageHeader"
import FormNewTask from "@/components/tasksPage/FormNewTask"
import TasksList from "@/components/tasksPage/TasksList"

export const revalidation = 0;

const Tasks = () => {
  return (
    <div className='tasks-page'>
      <div className="container">

        <PageHeader pageTitle='Tasks' />

        <FormNewTask />

        <TasksList />
      </div>
    </div>
  )
}

export default Tasks
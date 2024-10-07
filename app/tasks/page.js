// components
import PageHeader from "@/components/PageHeader"
import FormNewTask from "@/components/tasksPage/FormNewTask"
import TasksList from "@/components/tasksPage/TasksList"

const Tasks = () => {
  return (
    <div className='tasks-page'>

      <PageHeader pageTitle='Tasks' />

      <div className="container">

        <FormNewTask/>

        <TasksList/>
      </div>
    </div>
  )
}

export default Tasks
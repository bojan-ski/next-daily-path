// components
import PageHeader from "@/components/PageHeader"
import FormNewTask from "@/components/tasksPage/FormNewTask"

const Tasks = () => {
  return (
    <div className='tasks-page'>

      <PageHeader pageTitle='Tasks' />

      <div className="container">

        <FormNewTask/>

      </div>
    </div>
  )
}

export default Tasks
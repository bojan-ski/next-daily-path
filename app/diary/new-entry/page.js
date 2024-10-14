// components
import FormNewDiaryEntry from "@/components/diaryPage/FormNewDiaryEntry"
import PageHeader from "@/components/PageHeader"

const NewDiaryEntry = () => {
  return (
    <div className='new-diary-entry-page'>
      <div className="container">

        <PageHeader pageTitle='New Diary Entry' />

        <FormNewDiaryEntry />
      </div>
    </div>
  )
}

export default NewDiaryEntry
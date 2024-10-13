// components
import FormNewDiaryEntry from "@/components/diaryPage/FormNewDiaryEntry"
import PageHeader from "@/components/PageHeader"

const Diary = () => {
  return (
    <div className='diary-page'>
      <div className="container">

        <PageHeader pageTitle='Diary' />

        <FormNewDiaryEntry />
      </div>
    </div>
  )
}

export default Diary
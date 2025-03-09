// components
import DiaryPageNavigationTabs from '@/components/diaryPage/DiaryPageNavigationTabs'


const layout = ({ children }) => {
    return (
        <div className='diary-page my-10'>

            <DiaryPageNavigationTabs />

            {children}
        </div>
    )
}

export default layout
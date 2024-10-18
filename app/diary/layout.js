// components
import DiaryPageNavigationTabs from '@/components/diaryPage/DiaryPageNavigationTabs'

const layout = ({ children }) => {
    return (
        <div>
            <DiaryPageNavigationTabs />
            {children}
        </div>
    )
}

export default layout
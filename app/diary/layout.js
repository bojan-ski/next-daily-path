// components
import NavTabs from '@/components/diaryPage/NavTabs'

const layout = ({ children }) => {
    return (
        <div>
            <NavTabs />
            {children}
        </div>
    )
}

export default layout
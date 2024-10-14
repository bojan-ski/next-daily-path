import { FaHome, FaTasks } from "react-icons/fa";
import { PiBookOpenText } from "react-icons/pi";

export const navigationLinksIcons = [
    { icon: <FaHome />, href: '/' },
    { icon: <FaTasks />, href: '/tasks' },
    { icon: <PiBookOpenText />, href: '/diary', altPath: '/diary/new-entry' },
]
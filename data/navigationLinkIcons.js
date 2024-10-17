import { FaHome, FaTasks } from "react-icons/fa";
import { PiBookOpenText } from "react-icons/pi";

export const navigationLinksIcons = [
    { icon: <FaHome size={50} />, href: '/' },
    { icon: <FaTasks size={50} />, href: '/tasks' },
    { icon: <PiBookOpenText size={50} />, href: '/diary', altPath: '/diary/new-entry' },
]
'use client'
import { useState } from "react";
// icons
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";


const themes = {
    light: 'winter',
    dark: 'dracula'
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        const newTheme = theme == themes.light ? themes.dark : themes.light;

        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    }

    return (
        <div className="toggle-theme flex items-center justify-center">
            {theme == 'winter' ? (
                <button className="text-white hover:text-slate-950" onClick={toggleTheme}>
                    <FaMoon size={45} />
                </button>
            ) : (
                <button className="text-slate-950 hover:text-white" onClick={toggleTheme}>
                    <FaSun size={45} />
                </button>
            )}
        </div>
    )
}

export default ThemeToggle
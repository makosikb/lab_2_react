import { useEffect, useState } from 'react';

function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    // Автоматичне перемикання за часом
    useEffect(() => {
        const hour = new Date().getHours();
        const autoTheme = (hour >= 7 && hour < 21) ? 'light' : 'dark';
        setTheme(autoTheme);
        applyTheme(autoTheme);
    }, []);

    const applyTheme = (newTheme) => {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}

export default ThemeSwitcher;
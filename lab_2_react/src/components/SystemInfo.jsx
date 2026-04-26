import { useEffect, useState } from 'react';

function SystemInfo() {
    const [sysInfo, setSysInfo] = useState({});

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            timestamp: new Date().toLocaleString()
        };
        // Зберігаємо в localStorage
        localStorage.setItem('systemInfo', JSON.stringify(info));
        setSysInfo(info);
    }, []);

    return (
        <div className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-600">
            <p>OS: {sysInfo.platform} | Мова: {sysInfo.language}</p>
            <p className="truncate">Браузер: {sysInfo.userAgent?.substring(0, 80)}...</p>
        </div>
    );
}

export default SystemInfo;
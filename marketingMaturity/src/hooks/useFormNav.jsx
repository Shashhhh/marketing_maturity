import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useFormNav(currProgress) {
    const navigate = useNavigate();
    const [navBack, setNavBack] = useState(false);
    const [progress, setProgress] = useState(() => {
        const savedProgress = Number(sessionStorage.getItem('progress'));
        return savedProgress || currProgress;
    });

    useEffect(() => {
        const savedProgress = Number(sessionStorage.getItem('progress'));
        if (savedProgress === 0) {
            sessionStorage.setItem('progress', currProgress);
        }
    }, []);

    const handleNext = (path, increment = 5) => {
        const savedProgress = Number(sessionStorage.getItem('progress'));

        if (currProgress >= savedProgress) {
            const newProgress = savedProgress + increment;
            sessionStorage.setItem('progress', newProgress);
            setProgress(newProgress);
        }
        navigate(path);
    };

    const handleBack = (path) => {
        setNavBack(true);
        setTimeout(() => {
            navigate(path);
        }, 0);
    };

    return { progress, handleNext, handleBack, navBack};
}

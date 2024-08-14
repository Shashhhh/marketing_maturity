import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
    '/introPageCountry', 
    '/introPagePartnerLevel', 
    '/introPageMarketing',
    '/BGSB',
    '/customerDefinition',
    '/marketingExecutionPlan',
    '/marketingCapacity',
    '/databaseBuilding',
    '/contentDevelopment',
    '/results',
];

export function useFormNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;

    useEffect(() => {
        const pageIndex = pages.indexOf(currentPage);
        
        if (pageIndex !== -1) {
            const newProgress = 1 + pageIndex * 8;
            const currProgress = sessionStorage.getItem('progress');
            if (newProgress >  currProgress)
            {
                sessionStorage.setItem('progress', newProgress);
            }
        }
    }, [currentPage]);

    const handleNext = (path) => {
        navigate(path);
    };

    const handleBack = (path) => {
        navigate(path);
    };

    return {handleNext, handleBack};
}

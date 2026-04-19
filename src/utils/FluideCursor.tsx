import { useEffect, useState } from 'react';
import useFluidCursor from '../hooks/use-fluid-cursor';

const FluidCursor = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const isSmallScreen = window.innerWidth < 1024;
        if (isSmallScreen) {
            setIsMobile(true);
        } else {
            useFluidCursor();
        }
    }, []);
    if (isMobile) return null;
    return (
        <div className='fixed top-0 left-0 z-10 pointer-events-none'>
            <canvas id='fluid' className='w-screen h-screen' />
        </div>
    );
};

export default FluidCursor;
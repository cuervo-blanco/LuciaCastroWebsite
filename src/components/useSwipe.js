import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useSwipe = ({ onLeftSwipe, onRightSwipe, threshold = 50 }) => {
    const [touchStartX, setTouchStartX] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const handleTouchMove = (e) => {
            e.preventDefault();
        };
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > threshold) {
            // Left Swipe
            if (onLeftSwipe) router.push(onLeftSwipe);
        } else if (touchEndX - touchStartX > threshold) {
            // Right Swipe
            if (onRightSwipe) router.push(onRightSwipe);
        }
    };

    return { handleTouchStart, handleTouchEnd };
};

export default useSwipe;



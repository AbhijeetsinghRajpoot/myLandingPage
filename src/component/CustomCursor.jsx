import { useEffect, useState } from "react";

const CustomCursor = () => {    
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
             if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
            // Restore default cursor on cleanup
            document.body.style.cursor = 'auto';
        };
    }, []);

    const cursorDotStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
        backgroundColor: `${isHovering ? 'rgba(20, 184, 166, 0.5)' : 'white'}`,

    };

    const cursorCircleStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
    };

    return (
        <>
            <div style={cursorDotStyle} className="fixed w-3 h-3 bg-teal-500 rounded-full z-50 pointer-events-none transition-transform duration-200 ease-in-out" />
            <div style={cursorCircleStyle} className="fixed w-10 h-10 border-2 border-teal-500 rounded-full z-50 pointer-events-none transition-transform duration-200 ease-in-out" />
        </>
    );
};

export default CustomCursor;

import { useState, useEffect, useRef } from "react";

export const Clock = () => {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up function to clear interval when component unmounts
        return () => stop();
    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

    return (
        <>
            <div>
                <p>Current time: {time.toLocaleTimeString()}</p>
                <button type="button" onClick={stop}>Pause</button>
            </div>
        </>
    );
};
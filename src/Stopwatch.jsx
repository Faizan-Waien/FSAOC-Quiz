import React, { useEffect } from "react"
import Button from '@mui/material/Button';

const Stopwatch = ({ running, setRunning, time, setTime }) => {

    const clock = {
        background: 'white',
        padding: '10px',
        margin: '5px',
        fontSize: '30px',
        borderRadius: '10px',
    }

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div>
            <div style={{border:'2px solid #1976d2',borderRadius:'5px', width:'fit-content', padding:'15px', background:'#1976d2'}}>
                <span style={clock}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span style={clock}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span style={clock}>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                <Button onClick={() => setRunning(true)} variant="contained" sx={{mt:0.3, width:240}}>Start Quiz</Button>
                {/* <button onClick={() => {setRunning(false)}}>Stop</button> */}
                {/* <button onClick={() => setTime(0)}>Reset</button>        */}
            </div>
        </div>
    );
};

export default Stopwatch
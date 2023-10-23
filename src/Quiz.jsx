import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import BasicModal from './Modal';
import Stopwatch from './Stopwatch';

export default function Quiz({ data, title }) {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const [value, setValue] = useState(null)
    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState('Choose wisely')

    const [num, setNum] = useState(0)
    const [score, setScore] = useState(0)

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            if (value === data[num].ans) {
                setScore(score + 1);
            }
            setValue(null)
            setNum(num + 1)
        }
    }

    const checkAnswer = () => {
        if (value === data[num]?.ans) {
            setHelperText('You got it!');
            setError(false);
        }
        else if (value === null) {
            setHelperText('Please select an option.');
            setError(true);
        }
        else if (value !== data[num]?.ans) {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        }
    };

    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <h3 style={{ background: '#1976d2', color: 'white', padding: '10px' }}>{title}</h3>

            <Stopwatch running={running} setRunning={setRunning} time={time} setTime={setTime} />

            {time > 0 ?
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ m: 3 }} error={error} variant="standard">
                        <FormLabel id="demo-error-radios">{data[num]?.ques}</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-error-radios"
                            name="quiz"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            {data[num]?.opt.map((item, idx) => {
                                return (
                                    <div key={idx}>
                                        <FormControlLabel value={item} control={<Radio />} label={item} />
                                    </div>
                                )
                            })
                            }
                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                        <div style={{ display: 'flex' }}>
                            {num < 10 ?
                                <div>
                                    <Button sx={{ mt: 1, mr: 1 }} onClick={checkAnswer} type="button" variant="outlined" >
                                        Check Answer
                                    </Button>

                                    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" >
                                        NEXT
                                    </Button>
                                </div> :

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h2>Congrates! You have completed the quiz.</h2>
                                    <BasicModal score={score} setScore={setScore} setNum={setNum} setRunning={setRunning} time={time} setTime={setTime} />
                                </div>
                            }
                        </div>
                    </FormControl>
                </form> :
                <div>
                        <h2><u>Rules:</u></h2>

                        <p> <b>One Quiz at a Time:</b> You can attempt one quiz at a time. Complete your current quiz before moving on to the next one.</p>
                        <p> <b>Time Limit:</b>  Each quiz may have a time limit. Be mindful of the time and aim to complete the quiz within the specified duration.</p>
                        <p> <b>Honesty is Key:</b>  Attempt the quiz independently and avoid using external resources or assistance unless specified otherwise. The goal is to assess your knowledge and understanding.</p>
                        <p> <b>Instant Feedback:</b>  After submitting your answers, you'll receive instant feedback. Review your results to identify areas where you need improvement.</p>
                        <p> <b>Enjoy the Process:</b>  Learning is a continuous journey. Approach quizzes with a positive mindset and enjoy the process of expanding your knowledge.</p>

                        <p> Remember that the rules are in place to ensure a fair and effective learning experience for all. Engage with the quizzes as an opportunity to test your skills, learn, and grow as a full-stack developer.</p>
                </div>
            }
        </div>
    );
}

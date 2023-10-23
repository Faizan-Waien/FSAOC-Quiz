import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContxt } from './Context';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ score, setScore, setNum, setRunning, setTime, time }) {

  const { loginName } = useContxt()

  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true); setRunning(false) }
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button sx={{ mt: 1, mr: 1 }} onClick={handleOpen} variant="outlined">SUBMIT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ bgcolor: '#1976d2', p: 1, color: 'white' }}>
            SCORE CARD
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, p: 1 }}>
            {loginName}, You have answered {score} out of 10 questions correctly.
            <br /><br />
            You have secured {score / 10 * 100}% marks.
            <br /><br />
            The total time taken to complete the task was {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10) % 100)).slice(-2)}.
          </Typography>

          <Button sx={{ mt: 1, mr: 1 }} onClick={() => { setNum(0); setScore(0); setTime(0) }} variant="outlined">RESTART QUIZ</Button>
        </Box>
      </Modal>
    </div>
  );
}
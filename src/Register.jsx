import { Button, TextField, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useContxt } from './Context'

const Register = () => {

  const { userName, userGender, handleInputs, Submit, login, setLogin } = useContxt()

  return (
    <div>

      <div>
        <h3 style={{ background: '#1976d2', color: 'white', padding: '10px', margin: 0 }}>Introducion</h3>

        <p>The Full Stack Academy of Code is your go-to web application for honing your skills in full-stack development. This dynamic platform offers a wide array of quizzes designed to sharpen your knowledge of various full-stack programming languages and technologies. Whether you're a budding developer or a seasoned pro, our quizzes provide an efficient and engaging way to enhance your proficiency in the world of full-stack development.</p>
        <p><b>Diverse Course Offerings:</b> Our platform covers an extensive range of full-stack courses, ensuring that you have access to the knowledge you need to excel.</p>
        <p><b>Interactive Learning:</b> Dive into interactive quizzes that challenge your understanding, provide instant feedback, and foster continuous improvement.</p>
        <p><b>Comprehensive Curriculum:</b> Explore everything from front-end technologies to back-end frameworks, all within a single, user-friendly platform.</p>
        <p><b>Progress Tracking:</b> Monitor your progress, track your achievements, and chart your course to full-stack mastery.</p>
        <p>With the Full Stack Academy of Code, you have the tools and resources to build a strong foundation or take your existing skills to the next level. Join us today and embark on your journey towards becoming a full-stack development expert. Your gateway to success in the world of full-stack awaits!</p>
        
      </div>

      <div>
        <h3 style={{ background: '#1976d2', color: 'white', padding: '10px' }}>Register To Start</h3>

        <form onSubmit={Submit} style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Full Name"
            required
            variant="filled"
            size='small'
            name='name'
            value={userName}
            onChange={handleInputs}
            sx={{ m: '0px 50px' }}
          />

          <FormControl variant="filled" size='small' sx={{ m: '10px 50px' }}>
            <InputLabel>Gender</InputLabel>
            <Select
              name='gender'
              required
              value={userGender}
              onChange={handleInputs}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </FormControl>

          <Button sx={{ m: '10px 50px', height: 50 }} type="submit" variant="contained" >
            START
          </Button>
        </form>
      </div>

    </div>
  )
}

export default Register
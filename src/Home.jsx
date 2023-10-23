import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Quiz from './Quiz'
import { quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7 } from './Questions'
import Register from './Register';
import { useContxt } from './Context';
import { Avatar } from '@mui/material';

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ background: 'whitesmoke', width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
// --------------------------------------------------------
function a11yProps(index) {

  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
// ---------------------------------------------------------
export default function QuizTabs() {

  const { loginName, loginGender } = useContxt()

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    borderBottom: '1px solid lightgrey',
  }

  return (
    <div>
      <Box
        sx={{ flexGrow: 10, bgcolor: 'background.paper', display: 'flex', minHeight: '100vh' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: '15%' }}
        >
          <Tab
            label={<Typography sx={{ color: '343d44', fontWeight: 'bold' }}>{loginName ? `${loginName}` : 'Home'}</Typography>}
            icon={loginName && <Avatar alt="icon" src={(loginGender === 'male') ? "/src/assets/male.jpg" : "/src/assets/female.jpg"} sx={{ width: 60, height: 60 }} />}
            {...a11yProps(0)}
            sx={{ bgcolor: 'whitesmoke', border:'2px solid #e0e0e0' }} />

          <Tab label="HTML" {...a11yProps(1)} sx={tabStyle} disabled={loginName ? false : true} />
          <Tab label="CSS" {...a11yProps(2)} sx={tabStyle} disabled={loginName ? false : true} />
          <Tab label="JavaScript" {...a11yProps(3)} sx={tabStyle} disabled={loginName ? false : true} />
          <Tab label="Mango DB" {...a11yProps(4)} sx={tabStyle} disabled={loginName ? false : true} />
          <Tab label="Express JS" {...a11yProps(5)} sx={tabStyle} disabled={loginName ? false : true} />
          <Tab label="React JS" {...a11yProps(6)} sx={tabStyle} disabled={loginName ? false : true} />
          <Tab label="Node JS" {...a11yProps(7)} sx={tabStyle} disabled={loginName ? false : true} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Register />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Quiz data={quiz1} title='HTML QUIZ' />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Quiz data={quiz2} title='CSS QUIZ' />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Quiz data={quiz3} title='JAVASCRIPT QUIZ' />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Quiz data={quiz4} title='MONGO BD QUIZ' />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Quiz data={quiz5} title='EXPRESS JS QUIZ' />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Quiz data={quiz6} title='REACT JS QUIZ' />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Quiz data={quiz7} title='NODE JS QUIZ' />
        </TabPanel>
      </Box>
    </div>
  );
}
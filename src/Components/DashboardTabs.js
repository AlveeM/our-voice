import React from 'react';

import RepresentativesContainer from './RepresentativesContainer';
import UserElectionsContainer from './UserElectionsContainer';
import UserDivisionsContainer from './UserDivisionsContainer';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import MapIcon from '@material-ui/icons/Map';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsPanel: {
    marginBottom: '15px'
  }
}));

export default function DashboardTabs({ representatives, userElections, divisions }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.tabsPanel}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Check Registration" icon={<CheckCircleIcon />} {...a11yProps(0)} />
          <Tab label="Register to Vote" icon={<HowToVoteIcon />} {...a11yProps(1)} />
          <Tab label="Representatives" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Upcoming Elections" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Divisions" icon={<MapIcon />} {...a11yProps(4)} />
          {/* <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      {value === 0 && <iframe title="check registration" src="https://verify.vote.org/?partner=111111&campaign=free-tools" width="100%" height="870" marginHeight="0" frameBorder="0" id="frame3" scrollable ="no"></iframe>}
      {value === 1 && <iframe title="register to vote" src="https://register.vote.org/?partner=111111&campaign=free-tools" width="100%" height="870" marginHeight="0" frameBorder="0" id="frame1" scrollable ="no"></iframe>}
      {value === 2 && (representatives && representatives.length !== 0 && <RepresentativesContainer representatives={representatives} />)}
      {value === 3 && <UserElectionsContainer elections={userElections} />}
      {value === 4 && <UserDivisionsContainer divisions={divisions} />}
      {/* <TabPanel value={value} index={0} className={classes.voteTool}>
        <iframe title="check registration" src="https://verify.vote.org/?partner=111111&campaign=free-tools" width="100%" height="auto" marginheight="0" frameborder="0" id="frame3" scrollable ="no"></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
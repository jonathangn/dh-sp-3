'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Register from './Register';
import LogIn from './LogIn';
import styles from "./TabAccess.module.css"
import { teal } from '@mui/material/colors';
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "teal",
    fontStyle: "italic"
  }
});

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.box}>
        <Tabs className={styles.tabs} value={value} centered onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { backgroundColor: "teal" } }} >
          <StyledTab className={styles.tab} label="Regístrarse" {...a11yProps(0)} />
          <StyledTab className={styles.tab} label="Iniciar sesión" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Register />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <LogIn />
      </CustomTabPanel>
    </Box>
  );
}
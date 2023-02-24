import React from "react";
import {} from "@mui/lab";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import SwipeableViews from "react-swipeable-views";
import styled from "@mui/material/styles/styled";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  value?: number;
  index?: number;
}
const TabPanel: React.FC<TabPanelProps> = ({
  children,
  dir,
  index,
  value,
  ...otherProps
}) => {
  return (
    <>
      <div
        role="tabpanel"
        hidden={value != index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...otherProps}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    </>
  );
};

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange?(event: React.SyntheticEvent, newValue: number): void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    centered
    TabIndicatorProps={{ children: <span className="MUiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "green",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "red",
  },
});

interface StylesTabProps {
  label: string;
}
const StyledTab = styled((props: StylesTabProps) => (
  <Tab {...props} disableRipple />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(14),
  color: theme.palette.grey[400],
  "&:hover": {
    color: "#EB966A",
  },
}));

export default function FullWidthTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs example"
        >
          <StyledTab label="Item One" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
        </StyledTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="w-full"
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

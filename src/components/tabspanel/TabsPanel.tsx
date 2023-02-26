import React from "react";
import {} from "@mui/lab";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { styled, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import RecipeCollections from "../recipes/recipecollections/RecipeCollections";
import { onRouteClickS } from "@/services/features/globalstate/GlobalStateSlice";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  value?: number;
  index?: number;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange?(event: React.SyntheticEvent, newValue: number): void;
}

interface StylesTabProps {
  label: string;
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

const FullWidthTab = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const select = useSelector(onRouteClickS);
  console.log("selecyt ", select);

  return (
    <Box sx={{ bgcolor: "transparent", width: "100%" }}>
      <AppBar position="static" color="transparent" className="border">
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
          <>
            <RecipeCollections />
          </>
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
};
export default FullWidthTab;

import React from "react";
import { Box, Tab, AppBar, Tabs } from "@mui/material";
import {} from "@mui/lab";
import SwipeableViews from "react-swipeable-views";
import {
  StyledTabsProps,
  StylesTabProps,
  TabPanelProps,
  TCategory,
} from "@/types/types";
import { makeStyles, styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { recipeCreateData } from "@/utils/data/recipes";
import RecipesCreateOrder from "./children/recipescreateorder/RecipesCreateOrder";
import RecipesCreateChoose from "./children/recipescreatechoose/RecipesCreateChoose";
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
  "&:selected": {
    color: "#EB966A",
  },
}));

const CreateTabComponent = () => {
  const router = useRouter();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const categoryName = ({ name }: TCategory) => name;
  const renderCategoryName = (
    categories: TCategory[],
    callback: (v: TCategory) => string
  ) => {
    const results = [];
    for (let name = 0; name < categories.length; name++) {
      const category = categories[name];
      const result = callback(category);
      results.push(result);
    }
    return results;
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const names = renderCategoryName(recipeCreateData, categoryName);
    return router.push(`/recipes/create?=${names[newValue]}`);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <>
      <Box sx={{ bgcolor: "transparent", width: "100%" }}>
        <AppBar position="static" color="transparent" className="border">
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="full width tabs example"
          >
            <StyledTab label="Order" {...a11yProps(0)} />
            <StyledTab label="Recipes" {...a11yProps(1)} />
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
              <RecipesCreateOrder />
            </>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <RecipesCreateChoose />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default CreateTabComponent;

import React from "react";
import {} from "@mui/lab";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { styled, Theme, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import RecipeCollections from "../recipes/recipecollections/RecipeCollections";
import { onRouteClickS } from "@/services/features/globalstate/GlobalStateSlice";
import { useRouter } from "next/router";
import { categories, recipesData } from "@/utils/data/recipes";
import { RecipeElement, TCategory } from "@/types/types";

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
))(({ theme }: { theme: Theme }) => ({
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

const FullWidthTab = () => {
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
    const names = renderCategoryName(categories, categoryName);
    console.log(names);

    return router.push(`/recipes/collections?=${names[newValue]}`);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const router = useRouter();
  const { query } = router;
  const select = useSelector(onRouteClickS);
  console.log("select", select);
  const [categoryFilter, setCategoryFilter] = React.useState(
    query.category || ""
  );
  const [sortOrder, setSortOrder] = React.useState<string[] | string>(
    query.sort || "price-asc"
  );

  const filterRecipes = recipesData.filter((recipes) =>
    categoryFilter ? recipes.category === categoryFilter : true
  );
  const sortRecipesOne = filterRecipes.sort((recipe1, recipe2) => {
    const { price: price1, likes: likes1, title: title1 } = recipe1;
    const { price: price2, likes: likes2, title: title2 } = recipe2;
    switch (sortOrder) {
      case "price-asc":
        return price1 - price2;
      case "price-desc":
        return price2 - price1;
      case "rating-asc":
        return likes1 - likes2;
      case "likes-desc":
        return likes2 - likes1;
      default:
        return title1.localeCompare(title2);
    }
  });
  type TSortedRecipes = {
    [key: string]: any;
  };
  type SortOrder = "asc" | "desc";

  const handleCategoryFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryFilter(event.target.value);
    router.push({
      pathname: "/recipes",
      query: {
        ...query,
        sort: event.target.value,
      },
    });
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortOrder(event.target.value);
    router.push({
      pathname: "/recipes/collections",
      query: {
        sort: event.target.value,
        ...query,
      },
    });
  };
  return (
    <Box sx={{ bgcolor: "transparent", width: "100%" }}>
      <AppBar position="static" color="transparent" className="border">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs example"
        >
          {/* <StyledTab label="All Recipes" {...a11yProps(0)} />
          <StyledTab label="Healthy" {...a11yProps(1)} /> */}
          {categories.map(({ id, name }) => (
            <StyledTab label={name} {...a11yProps(id as number)} key={id} />
          ))}
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
            <RecipeCollections
              categoryFilter={categoryFilter}
              handleFilter={handleCategoryFilterChange}
              handleSort={handleSortOrderChange}
              sortOrder={sortOrder}
              sortedRecipes={sortRecipesOne!}
              setSortOrder={setSortOrder}
            />
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

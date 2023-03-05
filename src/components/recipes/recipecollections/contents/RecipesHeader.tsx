import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  SelectChangeEvent,
  MenuItem,
  outlinedInputClasses,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { styled, useTheme, useColorScheme, Theme } from "@mui/material/styles";
import { TRecipes } from "@/types/types";
import { string } from "yup";
import { useRouter } from "next/router";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const RecipesHeader: React.FC<TRecipes> = ({
  handleSort,
  sortOrder,
  setSortOrder,
}) => {
  const router = useRouter();
  const { query } = router;
  const theme = useTheme();
  const [filterName, setFilterName] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof filterName>) => {
    const {
      target: { value },
    } = event;
    setFilterName(typeof value === "string" ? value.split(",") : value);
    setSortOrder(value);
    router.push({
      pathname: "/recipes/collections",
      query: {
        sort: event.target.value,
        ...query,
      },
    });
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontWeight: "medium", fontSize: "1.2rem" }}>
          What Do you want to eat today?
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl sx={{ width: 300 }}>
          <Select
            value={filterName}
            // onChange={handleChange}
            // value={sortOrder as string[]}
            onChange={handleChange}
            multiple
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em className="text__element">Trending</em>;
              }
              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without Label" }}
          >
            {names
              .sort((a, b) => a.localeCompare(b))
              .map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, filterName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RecipesHeader;

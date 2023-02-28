import { styled, Theme } from "@mui/material/styles";
import { ToggleButtonProps } from "@mui/lab";
import { ButtonProps, Button, ButtonBase } from "@mui/material";
import { purple, red } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[900],
    "&:hover": {
      backgroundColor: red[700],
    },
  })
);

export { ColorButton };

import { FormikErrors, FormikTouched } from "formik";
import { z } from "zod";

type UserSignup = { usernames: string; email: string; password: string };

type UserLogin = { username: string; password: string };

type ComponentsBaseProps = React.FC<{
  children?: React.ReactNode;
  ValidationSchema?: {};
  initialValues?: {};
  //   onSubmit?: () => void;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange?: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  errors?: FormikErrors<UserSignup>;
  touched?: FormikTouched<UserSignup>;
  placeholder?: string;
  handleBlur?: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error?: string;
  visible?: boolean;
  name?: string;
  helperText?: string;
  disabled?: boolean;
  onRouteClick?: boolean;
}>;

interface AuthLayoutProps {
  children?: React.ReactNode;
  title?: string;
  redirect?: {
    pathname: { text: string; link: string };
    desc: string;
  };
}
interface TUser {
  id: string | number;
  name: string;
}
interface RecipeElement {
  [key: string]:
    | string
    | string[]
    | number
    | undefined
    | boolean
    | React.ReactNode
    | TUser
    | Date;
  image: string;
  title: string;
  description?: string;
  timeFrame?: string;
  ingredients?: string | string[];
  directions?: string;
  link?: string;
  id?: string;
  type?: string;
  active?: boolean;
  disabled?: boolean;
  // children?: React.ReactNode;
  price?: number;
  category?: string;
  instructions?: string[];
  likes?: number;
  dislikes?: number;
  comments?: number;
  user?: TUser;
  createdAt?: Date;
  updatedAt?: Date;
  favorite?: boolean;
  deleted?: boolean;
  favoriteCount?: number;
  commentCount?: number;
}

const GlobalInitialState = z.object({
  onRouteClick: z.boolean(),
  isResponse: z.boolean(),
  isLoading: z.boolean(),
});

type TGlobal = z.infer<typeof GlobalInitialState>;

type TCategory = { id: number | string; name: string; color?: string };

interface TRecipes {
  handleSort?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortedRecipes?: RecipeElement[];
  categoryFilter?: string | string[];
  sortOrder: string | string[];
  setSortOrder: React.Dispatch<React.SetStateAction<string | string[]>>;
}
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
export type {
  ComponentsBaseProps,
  AuthLayoutProps,
  UserLogin,
  UserSignup,
  RecipeElement,
  TGlobal,
  TCategory,
  TRecipes,
  TabPanelProps,
  StyledTabsProps,
  StylesTabProps,
};

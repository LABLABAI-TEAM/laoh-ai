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
}>;

interface AuthLayoutProps {
  children?: React.ReactNode;
  title?: string;
  redirect?: {
    pathname: { text: string; link: string };
    desc: string;
  };
}

interface RecipeElement {
  image: string;
  title: string;
  description?: string;
  timeFrame?: string;
  ingredients?: string;
  directions?: string;
  link?: string;
  id?: string;
  type?: string;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  price?: number;
}

const GlobalInitialState = z.object({
  onRouteClick: z.boolean(),
});

type TGlobal = z.infer<typeof GlobalInitialState>;

export type {
  ComponentsBaseProps,
  AuthLayoutProps,
  UserLogin,
  UserSignup,
  RecipeElement,
  TGlobal,
};

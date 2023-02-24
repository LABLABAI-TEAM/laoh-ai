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
  errors?: {}[];
  touched?: {}[];
  placeholder?: string;
  handleBlur?: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error?: string;
  visible?: boolean;
  name?: string;
}>;

interface AuthLayoutProps {
  children?: React.ReactNode;
  title?: string;
  redirect?: {
    pathname: { text: string; link: string };
    desc: string;
  };
}

export type { ComponentsBaseProps, AuthLayoutProps };

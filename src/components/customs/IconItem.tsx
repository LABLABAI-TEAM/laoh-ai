import { Iconstyles } from "@/styles/themes/css/app.style";
import { Box } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
interface IconItemProps {
  icon: React.ReactNode;
}
const IconItem: React.FC<{
  children?: React.ReactNode;
  handleRoute?(): void;
}> = ({ children, handleRoute }) => {
  const { Layout, Wrapper } = Iconstyles;
  return (
    <>
      <div className="group w-20 h-20">
        <Wrapper>
          <Layout onClick={handleRoute}>{children}</Layout>
        </Wrapper>
      </div>
    </>
  );
};

export default IconItem;

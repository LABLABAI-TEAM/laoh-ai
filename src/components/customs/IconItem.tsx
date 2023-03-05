import { Iconstyles } from "@/styles/themes/css/app.style";
import { Box } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
import cx from "classnames";
import { useRouter } from "next/router";
interface IconItemProps {
  icon: React.ReactNode;
}
const IconItem: React.FC<{
  children?: React.ReactNode;
  handleTabClick: () => void;
  onRoute?: boolean;
  route?: string;
}> = ({ children, handleTabClick, onRoute, route }) => {
  const { Layout, Wrapper } = Iconstyles;
  const router = useRouter();
  return (
    <>
      <div className="group  w-12 h-12 xl:w-16 xl:h-16 ">
        <Wrapper
          className={cx(router.asPath.includes(route!) ? "bg-[#252836]" : "")}
        >
          <Layout onClick={handleTabClick}>{children}</Layout>
        </Wrapper>
      </div>
    </>
  );
};

export default IconItem;

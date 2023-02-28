import React from "react";
import Image, { ImageProps as NextImageProps } from "next/image";

const AppImage: React.FC<NextImageProps> = ({
  src,
  alt,
  width = 500,
  height = 500,
  ...rest
}) => {
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
};

export default AppImage;

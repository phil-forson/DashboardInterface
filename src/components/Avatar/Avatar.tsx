import React from "react";
import { Box, Image } from "@chakra-ui/react";

type AvatarProps = {
  src: any;
  alt?: string;
  onClick?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, onClick }) => {
  return (
    <Box
      as="span"
      display="inline-block"
      flexShrink={0}
      position="relative"
      borderRadius="0.475rem"
      onClick={onClick}
      cursor={onClick ? "pointer" : "default"}
    >
      <Image src={src} alt={alt} borderRadius="0.475rem" width={'40px'} height={'40px'} display={'inline-block'} />
    </Box>
  );
};

export default Avatar;

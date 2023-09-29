import React from "react";
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { FaGenderless } from "react-icons/fa";

type TimelineItemProps = {
  time: string;
  content: Array<{ text: string; color?: string }>;
  color: string;
  muted?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  content,
  color,
  muted,
}) => {
  return (
    <Flex
      position={"relative"}
      _before={{
        content: '""',
        position: "absolute",
        left: "51px",
        width: "3px",
        top: 0,
        bottom: 0,
        bg: "dark.600",
      }}
    >
      <Flex alignItems={"flex-start"} pos={"relative"} marginBottom={"1.7rem"}>
        <Box
          width={50}
          flexShrink={0}
          pos={"relative"}
          fontWeight={700}
          color={"sysgray.100"}
        >
          <Text fontSize={"1.075rem"} fontFamily={"PoppinsBold"}>
            {time}
          </Text>
        </Box>
        <Flex
          width={"1rem"}
          height={"1rem"}
          borderRadius={"100%"}
          justify={"center"}
          align={"center"}
          pos={"relative"}
          marginTop={"1px"}
          marginLeft={"-0.5rem"}
          padding={"3px"}
          borderWidth={6}
          borderStyle={"solid"}
          borderColor={"dark.100"}
          bg={"dark.100"}
          flexShrink={0}
        >
          <Icon as={FaGenderless} color={color} fontSize={"2rem"} />
        </Flex>
        <Box paddingLeft={"0.75rem"} flexGrow={1}>
          {content.map((segment, index) => {
            if (segment.color) {
              return (
                <Link
                  href="#"
                  color={
                    segment.color
                      ? segment.color
                      : muted
                      ? "dark.300"
                      : "sysgray.100"
                  }
                  fontWeight={muted ? "normal" : 700}
                  fontFamily={muted ? "PoppinsLight" : "PoppinsBold"}
                  display={"inline-block"}
                  textDecor={"none"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  marginInline={1}
                >
                  {segment.text}
                </Link>
              );
            } else {
              return (
                <Text
                  key={index}
                  color={
                    segment.color
                      ? segment.color
                      : muted
                      ? "dark.300"
                      : "sysgray.100"
                  }
                  fontWeight={muted ? "normal" : 700}
                  fontFamily={muted ? "PoppinsLight" : "PoppinsBold"}
                  display="inline-block"
                >
                  {segment.text}
                </Text>
              );
            }
          })}
        </Box>
      </Flex>
    </Flex>
  );
};

const Timeline: React.FC<{ timelineData: TimelineItemProps[] }> = ({
  timelineData,
}) => {
  return (
    <Box className="timeline-label">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default Timeline;

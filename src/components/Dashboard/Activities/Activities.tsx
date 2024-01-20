import CustomCard from "../../CustomCard/CustomCard";
import { CardBody } from "@chakra-ui/react";
import Timeline from "../../Timeline/Timeline";

const Activities = () => {
  const timelineData = [
    {
      time: "08:42",
      content: [{ text: "Outlines keep you honest. And keep structure" }],
      color: "yellow.300",
      muted: true,
    },
    { time: "10:00", content: [{ text: "AEOL meeting" }], color: "green.300" },
    {
      time: "14:37",
      content: [
        { text: "Make deposit" },
        { text: "USD 700", color: "sysblue.100" },
        { text: "to ESL" },
      ],
      color: "red.300",
    },
    {
      time: "16:50",
      content: [
        { text: "Indulging in poorly driving and keep structure keep great" },
      ],
      color: "blue.300",
      muted: true,
    },
    {
      time: "21:03",
      content: [
        { text: "New order placed" },
        { text: "XF-2356", color: "sysblue.100" },
      ],
      color: "red.300",
    },
    {
      time: "16:50",
      content: [
        { text: "Indulging in poorly driving and keep structure keep great" },
      ],
      color: "blue.300",
      muted: true,
    },
    {
      time: "21:03",
      content: [
        { text: "New order placed " },
        { text: "#XF-2356", color: "sysblue.100" },
      ],
      color: "red.300",
    },
    {
      time: "10:30",
      content: [{ text: "Finance KPI Mobile app launch preparation meeting" }],
      color: "green.300",
      muted: true,
    },
  ];
  return (
    <CustomCard
      bg="dark.100"
      marginBottom={10}
      headerText="Activities"
      headerSubtext="890,344 Sales"
    >
      <CardBody paddingTop={2} paddingInline={"2.25rem"}>
        <Timeline timelineData={timelineData} />
      </CardBody>
    </CustomCard>
  );
};

export default Activities;

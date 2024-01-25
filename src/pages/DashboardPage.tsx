import { useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";
import ActiveNavItem from "../components/Nav/ActiveNavItem";
import Dashboard from "../models/Dashboard/Dashboard";

const DashboardPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <Box flex="1" bg="gray.100">
        <Navbar isExpanded={isExpanded} />
        <ActiveNavItem activeLabel="Dashboard" isExpanded={isExpanded} />
        <Dashboard isExpanded={isExpanded} />
      </Box>
    </>
  );
};

export default DashboardPage;

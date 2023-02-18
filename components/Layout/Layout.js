import { Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      {/* Hacer pos: absolute, h=100vh con scroll y aplicar Page Transitions */}
      <Box p={"20px 50px"}>
        <Navbar />
        {children}
      </Box>
    </>
  );
};

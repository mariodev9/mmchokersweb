import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Footer from "./Footer";
import { Navbar } from "./Nav";

export const Layout = ({ children, footer }) => {
  return (
    <>
      {/* Hacer pos: absolute, h=100vh con scroll y aplicar Page Transitions */}
      {/* p={{ base: "15px 20px", tablet: "15px 40px" }} */}
      <Box>
        <Navbar />
        <Box>{children}</Box>
        {footer && <Footer />}
      </Box>
    </>
  );
};

import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Footer from "./Footer";
import { Navbar } from "./Nav";
import { NewNavbar } from "./NewNav";

export const Layout = ({ children, footer }) => {
  return (
    <>
      {/* p={{ base: "15px 20px", tablet: "15px 40px" }} */}
      <Container maxW="8xl">
        <NewNavbar />
        <Box pt={{ base: "0px", tablet: "25px" }}>{children}</Box>
      </Container>
      {footer && <Footer />}
    </>
  );
};

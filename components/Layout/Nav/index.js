import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Cart, Logo } from "../../Icons";

const NavLinks = [
  {
    title: "Colecciones",
    url: "/Colecciones",
  },
  {
    title: "Categorias",
    url: "/Colecciones",
  },
  {
    title: "Ultimos Productos",
    url: "/Colecciones",
  },
];

export const Navbar = () => {
  return (
    <Flex justify={"space-between"} align={"end"}>
      <Logo />
      <Box display={{ base: "none", tablet: "flex" }}>
        <HStack spacing={10} fontWeight={500}>
          {NavLinks.map((navlink) => (
            <Link key={navlink.title} href={navlink.url}>
              {navlink.title}
            </Link>
          ))}
        </HStack>
      </Box>
      <Box>
        <Flex
          justify={"center"}
          align={"center"}
          pos={"relative"}
          top={"20px"}
          left={"35px"}
          w={"25px"}
          h={"25px"}
          bg={"yellow.100"}
          borderRadius={"full"}
        >
          20
        </Flex>

        <Button>
          <Cart />
        </Button>
      </Box>
    </Flex>
  );
};

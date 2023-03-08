import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { Logo, MenuIcon } from "../../Icons";
import { motion, useScroll } from "framer-motion";
import { SocialMedia } from "../../Home/SocialMedia";
import { useRouter } from "next/router";
import CartButton from "../../Shared/Buttons/CartButton";

const NavLinks = [
  {
    title: "Colecciones",
    url: "/Colecciones",
  },

  {
    title: "Preguntas Frecuentes",
    url: "/Colecciones",
  },
  {
    title: "Nosotros",
    url: "/Nosotros",
  },
];

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
};

export const Navbar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  }, [scrollY]);

  return (
    <motion.div
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      style={{ width: "100%", position: "fixed", zIndex: 99 }}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        w={"100%"}
        h={"10vh"}
        p={{ base: "15px 20px", tablet: "40px 40px" }}
        bg={"#fff"}
      >
        <Button
          display={{ base: "flex", tablet: "none" }}
          onClick={onOpen}
          variant={"outline"}
        >
          <MenuIcon />
        </Button>
        <Link href={"/"}>
          <Logo />
        </Link>
        <Box display={{ base: "none", tablet: "flex" }}>
          <HStack spacing={10} fontWeight={500}>
            <Menu isLazy>
              <MenuButton fontWeight={500}>Productos</MenuButton>
              <MenuList bg={"#fff"}>
                {/* Estos links deberian ser de next */}
                <MenuItem as="a" href="/Collares" bg={"#fff"}>
                  Collares
                </MenuItem>
                <MenuItem as="a" href="/Cadenas" bg={"#fff"}>
                  Cadenas
                </MenuItem>
                <MenuItem as="a" href="/Pulseras" bg={"#fff"}>
                  Pulseras
                </MenuItem>
              </MenuList>
            </Menu>
            {NavLinks.map((navlink) => (
              <Link key={navlink.title} href={navlink.url}>
                {navlink.title}
              </Link>
            ))}
          </HStack>
        </Box>

        <CartButton />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent bg={"#fff"}>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              spacing={10}
              h={"100%"}
              fontWeight={600}
              fontSize={"30px"}
              align={"center"}
              justify={"center"}
            >
              {NavLinks.map((navlink) => (
                <Box
                  key={navlink.title}
                  p={"5px 20px"}
                  _hover={{
                    bg: "yellow.100",
                  }}
                  borderRadius={"25px"}
                  textAlign={"center"}
                >
                  <Link href={navlink.url}>{navlink.title}</Link>
                </Box>
              ))}
              <SocialMedia />
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
};

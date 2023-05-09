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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
// import { Link } from "@chakra-ui/react";
import { Logo, Logoo, MenuIcon } from "../../Icons";
import { motion, useScroll } from "framer-motion";
import { SocialMedia } from "../../Home/SocialMedia";
import { useRouter } from "next/router";
import CartButton from "../../Shared/Buttons/CartButton";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

const NavLinks = [
  {
    title: "Collares",
    url: "/Collares",
  },
  {
    title: "Cadenas",
    url: "/Cadenas",
  },
  {
    title: "Pulseras",
    url: "/Pulseras",
  },
  {
    title: "Billeteras",
    url: "/Billeteras",
  },
  // {
  //   title: "Preguntas Frecuentes",
  //   url: "/Preguntas",
  // },
  // {
  //   title: "Nosotros",
  //   url: "/Nosotros",
  // },
];

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
};

export const Navbar = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);

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
    scrollY.onChange(() => update());
  }, [scrollY]);

  return (
    <motion.div
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      style={{
        width: "100%",
        position: "fixed",
        zIndex: 99,
      }}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        w={"100%"}
        h={"10vh"}
        p={{ base: "15px 30px", tablet: "40px 40px" }}
        bg={"#fff"}
      >
        <Button
          display={{ base: "flex", tablet: "none" }}
          onClick={onOpen}
          border={"none"}
          bg={"none"}
          px={"0px"}
        >
          <MenuIcon />
        </Button>
        <Link href={"/"} passHref legacyBehavior>
          <Box cursor={"pointer"}>
            <Logo />
          </Box>
        </Link>
        <Box display={{ base: "none", tablet: "flex" }}>
          <HStack spacing={10} fontWeight={500}>
            {NavLinks.map((navlink) => (
              <Link key={navlink.title} href={navlink.url}>
                {navlink.title}
              </Link>
            ))}
          </HStack>
        </Box>

        <CartButton
          subtotal={cart.reduce((count, curItem) => {
            return count + curItem.price * curItem.quantity;
          }, 0)}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent bg={"#fff"}>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              spacing={5}
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
                  borderRadius={"2px"}
                  textAlign={"center"}
                >
                  <Link href={navlink.url}>{navlink.title}</Link>
                </Box>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <VStack
              w={"full"}
              spacing={5}
              h={"100%"}
              fontWeight={600}
              fontSize={"30px"}
              align={"center"}
              justify={"center"}
            >
              <Text fontWeight={600} fontSize={"20px"}>
                Quienes somos
              </Text>
              <Text fontWeight={600} fontSize={"20px"}>
                Preguntas frecuentes
              </Text>

              <SocialMedia />
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
};

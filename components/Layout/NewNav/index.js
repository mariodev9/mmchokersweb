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
  Container,
  Input,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import { Logo, MenuIcon } from "../../Icons";
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
  {
    title: "Black Site Collection",
    url: "/Black-Site",
  },
  {
    title: "Chokers Collection",
    url: "/Chokers",
  },
];

const CategoriesList = [
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
];

const CollectionList = [
  {
    title: "Black Site",
    url: "/Black-Site",
  },
  {
    title: "Chokers",
    url: "/Chokers",
  },
];

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
};

export const NewNavbar = () => {
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
        zIndex: 99,
        position: "fixed",
      }}
    >
      <Container
        maxW="8xl"
        px={"20px"}
        bg={"#fff"}
        zIndex={99}
        pos={"fixed"}
        // tiene width 100% por defecto
        width={"auto"}
      >
        <Grid
          py={"20px"}
          templateColumns={"repeat(3, 1fr)"}
          alignItems={"center"}
        >
          <GridItem display={{ base: "flex", tablet: "none" }} w={"100%"}>
            <Button onClick={onOpen} border={"none"} bg={"none"} px={"1px"}>
              <MenuIcon />
            </Button>
          </GridItem>
          <GridItem w={"100%"} display={{ base: "none", tablet: "flex" }}>
            <Box>
              <HStack
                spacing={10}
                fontWeight={500}
                fontSize={"lg"}
                color={"#444"}
              >
                <Link
                  key="ultimos_productos"
                  href="/ultimos_productos"
                  passHref
                >
                  <a className="nav-link">Ultimos productos</a>
                </Link>
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    _expanded={{ color: "#000" }}
                    className="nav-link"
                  >
                    Productos
                  </MenuButton>
                  <MenuList>
                    {CategoriesList.map((category) => (
                      <MenuItem bg={"none"}>
                        <Link
                          key="ultimos_productos"
                          href={category.url}
                          passHref
                        >
                          <a className="nav-link">{category.title}</a>
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    _expanded={{ color: "#000" }}
                    className="nav-link"
                  >
                    Colecciones
                  </MenuButton>
                  <MenuList>
                    {CollectionList.map((collection) => (
                      <MenuItem key={collection.title} bg={"none"}>
                        <Link href={collection.url} passHref>
                          <a className="nav-link">{collection.title}</a>
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w={"100%"} display={"flex"} justifyContent={"center"}>
            <Link href={"/"} passHref legacyBehavior>
              <Box cursor={"pointer"}>
                <Logo />
              </Box>
            </Link>
          </GridItem>
          <GridItem
            w={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            gap={3}
          >
            {/* <Input borderRadius={"full"} placeholder="Buscar"></Input> */}
            <CartButton
              subtotal={cart.reduce((count, curItem) => {
                return count + curItem.price * curItem.quantity;
              }, 0)}
            />
          </GridItem>
        </Grid>
      </Container>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent bg={"#fff"}>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              spacing={3}
              h={"100%"}
              fontWeight={500}
              fontSize={"18px"}
              align={"start"}
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

          <DrawerFooter borderTop={"1px solid #f3f3f3"}>
            <VStack
              w={"full"}
              spacing={5}
              h={"100%"}
              fontWeight={500}
              fontSize={"16px"}
              align={"center"}
              justify={"center"}
            >
              <Link href={"/Nosotros"}> Quienes somos</Link>

              <Link href={"/preguntas-frecuentes"}>Preguntas frecuentes</Link>

              <SocialMedia />
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
};

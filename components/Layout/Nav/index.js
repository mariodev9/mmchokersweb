import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  VStack,
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
import { Cart, Logo, MenuIcon } from "../../Icons";
import { motion } from "framer-motion";
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

export const Navbar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        width={"100%"}
        height={"10vh"}
      >
        <Button
          display={{ base: "flex", tablet: "none" }}
          onClick={onOpen}
          variant={"outline"}
        >
          <MenuIcon />
        </Button>
        <Logo />
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

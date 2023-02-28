import { ChakraProvider } from "@chakra-ui/react";
import UseCartContext from "../context/useCartContext";
import "../styles/globals.css";
import { theme } from "../styles/index";

function MyApp({ Component, pageProps }) {
  return (
    <UseCartContext>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UseCartContext>
  );
}

export default MyApp;

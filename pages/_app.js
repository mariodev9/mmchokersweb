import { ChakraProvider } from "@chakra-ui/react";
import UseCartContext from "../context/useCartContext";
import "../styles/globals.css";
import { theme } from "../styles/index";
// import { initMercadoPago } from "@mercadopago/sdk-react";
// const initMercadoPago = require("@mercadopago/sdk-react");

// initMercadoPago("TEST-3d59145e-303b-4302-8ccf-4e49add1887a");

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

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // ESTILOS GLOBALES
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "#000",
        fontFamily: "Poppins, sans-serif",
      },
      a: {
        textDecoration: "none",
      },
    },
  },

  breakpoints: {
    mobile: "360px",
    tablet: "834px",
    desktop: "1024px",
  },
  // COLORES
  colors: {
    gray: {
      100: "#393939",
      200: "#222222",
    },
    red: {
      100: "#FF4150",
    },
    yellow: {
      100: "#FBD433",
    },
    blue: {
      100: "#6BB4FF",
    },
  },
  // LAYER
  layerStyles: {
    primaryBox: {
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
    },
  },
  // COMPONENTES
  components: {
    Button: {
      baseStyle: {
        bg: "none",
        _hover: {
          bg: "none",
        },
      },

      variants: {
        primary: {
          bg: "yellow.100",
          color: "#000",
          fontSize: "15px",
          padding: "9px 27px",
          borderRadius: "30px",
          _hover: {
            bg: "#000",
            color: "yellow.100",
          },
        },
        social: {
          padding: "10px 10px",
          borderRadius: "8px",
        },
        outline: {
          bg: "none",
          _hover: {
            bg: "none",
          },
        },
      },
    },
    // TEXT
    Text: {
      baseStyle: {
        fontWeight: "600",
      },
    },
    // CONTAINER
    Container: {
      variants: {
        main: {
          padding: "20px",
          maxWidth: "100%",
        },
      },
    },
  },
});

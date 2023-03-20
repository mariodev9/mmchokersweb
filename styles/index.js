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
    black: {
      100: "#181818",
    },
    gray: {
      100: "#BEBEBE",
      200: "#666",
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
    layoutWraper: {
      px: "30px",
      pt: { base: "11vh", tablet: "13vh" },
    },
    xWraper: {
      px: "30px",
    },
  },
  // COMPONENTES
  components: {
    Button: {
      baseStyle: {
        padding: 0,
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
          padding: "15px 27px",
          borderRadius: "15px",
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
      variants: {
        sectionTitle: {
          fontWeight: "600",
          fontSize: "20px",
          textAlign: "center",
        },
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

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
      // pt: { base: "1vh", tablet: "5vh" },

      pt: { base: "11vh", tablet: "10vh" },
    },
    xWraper: {
      px: "30px",
    },

    ImageHeaderBox: {
      h: "full",
      w: "full",
      pos: "relative",
      transition: "all .25s ease",
      cursor: "pointer",
      _hover: { transform: "scale(1.03)" },
      borderRadius: "20px",
      overflow: "hidden",
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
          fill: "#000",
          w: "full",
          bg: "yellow.100",
          color: "#000",
          fontSize: "4xl",
          py: "3rem",
          borderRadius: "full",
          _hover: {
            fill: "yellow.100",
            bg: "#000",
            color: "yellow.100",
          },
        },
        formbutton: {
          fill: "#000",
          w: "50%",
          bg: "yellow.100",
          color: "#000",
          fontSize: "xl",
          py: "1.5rem",
          borderRadius: "full",
          _hover: {
            fill: "yellow.100",
            bg: "#000",
            color: "yellow.100",
          },
        },
        social: {
          padding: "10px 10px",
          borderRadius: "4px",
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

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout/Layout";

export default function NosotrosPage() {
  return (
    <Layout footer>
      <Box layerStyle={"layoutWraper"}>
        <Text fontSize={"20px"} textAlign={"center"} mb={"20px"}>
          Nosotros
        </Text>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id qui
          voluptas, sed nobis dolorum tempore nisi quas quae ut minima beatae.
          Debitis ab temporibus quasi amet corporis accusamus quos recusandae.
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          libero veniam deserunt sit dicta nisi eaque enim, possimus asperiores
          optio nulla explicabo totam porro assumenda facilis est a maiores et?
        </p>
      </Box>
    </Layout>
  );
}

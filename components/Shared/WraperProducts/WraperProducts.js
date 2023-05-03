import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Product from "../../Products/Product";

export default function WraperProducts({ products }) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        tablet: "repeat(3, 1fr)",
        desktop: "repeat(5, 1fr)",
      }}
      gap={3}
    >
      {products.map((item) => (
        <GridItem key={item.name} w="100%" mb={"15px"}>
          <Product {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}

import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Product from "../../Products/Product";

export default function WraperProducts({ products }) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        tablet: "repeat(3, 1fr)",
        desktop: "repeat(4, 1fr)",
      }}
      gap={5}
    >
      {products.map((item) => (
        <GridItem key={item.name} w="100%">
          <Product {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}

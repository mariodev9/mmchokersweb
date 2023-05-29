import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProductItem from "../../Products/ProductItem";

export default function WraperProducts({ products }) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        tablet: "repeat(3, 1fr)",
        desktop: "repeat(5, 1fr)",
      }}
      gap={1}
    >
      {products.map((item, index) => (
        <GridItem key={item.name} w="100%" mb={"15px"}>
          <ProductItem index={index} {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}

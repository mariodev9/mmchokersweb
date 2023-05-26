import React, { useEffect, useState } from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

export default function CollaresPage() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/api/Categoria/Collares`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <CategoryPage category={"Collares"}>
      {products ? (
        <WraperProducts products={products.products} />
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            tablet: "repeat(3, 1fr)",
            desktop: "repeat(5, 1fr)",
          }}
          gap={1}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <GridItem key={item} w="100%" mb={"15px"}>
              <Skeleton h={"300px"} w={"100%"}></Skeleton>
            </GridItem>
          ))}
        </Grid>
      )}
    </CategoryPage>
  );
}

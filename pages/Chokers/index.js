// import  { useEffect, useState } from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
// import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

export default function ChokersPage({ allChokers }) {
  // const [products, setProducts] = useState(undefined);

  // useEffect(() => {
  //   fetch(`http://mmchokers.vercel.app/api/Categoria/Chokers`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <CategoryPage category={"Chokers"}>
      todo los choker
      <WraperProducts products={allChokers} />
    </CategoryPage>
  );
}

export const getServerSideProps = async ({ params }) => {
  const chokersResponse = await fetch(`${process.env.API_URL}/chokers`);

  if (chokersResponse.status === 404) {
    return { notFound: true };
  }

  const allChokers = await chokersResponse.json();

  return {
    props: {
      allChokers,
    },
  };
};

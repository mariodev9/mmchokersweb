import Head from "next/head";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function ChokersPage({ products }) {
  return (
    <>
      <Head>
        <title>MM Chokers | Colección Chokers</title>
        <meta name="MM Chokers website" content="Chokers" />
      </Head>
      <CategoryPage category={"Chokers"}>
        <WraperProducts products={products} />
      </CategoryPage>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const productResponse = await fetch(
    `${process.env.API_URL}/Categoria/Chokers`
  );

  if (productResponse.status === 404) {
    return { notFound: true };
  }

  const products = await productResponse.json();

  return {
    props: {
      products,
    },
  };
};

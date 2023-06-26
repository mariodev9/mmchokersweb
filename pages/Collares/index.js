import Head from "next/head";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function CollaresPage({ products }) {
  return (
    <>
      <Head>
        <title>MM Chokers | Collares</title>
        <meta name="MM Chokers website" content="Collares" />
      </Head>
      <CategoryPage category={"Collares"}>
        <WraperProducts products={products} />
      </CategoryPage>
    </>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await fetch(
    `${process.env.API_URL}/Categoria/Collares`
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

import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function ChokersPage({ products }) {
  return (
    <CategoryPage category={"Chokers"}>
      <WraperProducts products={products} />
    </CategoryPage>
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

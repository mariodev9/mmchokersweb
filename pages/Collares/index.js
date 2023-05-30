import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function CollaresPage({ products }) {
  return (
    <CategoryPage category={"Collares"}>
      <WraperProducts products={products} />
    </CategoryPage>
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

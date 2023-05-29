import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function ChokersPage({ allChokers }) {
  return (
    <CategoryPage category={"Chokers"}>
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

import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function ChokersPage({ data }) {
  return (
    <CategoryPage category={"Chokers"}>
      <WraperProducts products={data.products} />
    </CategoryPage>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://mmchokers.vercel.app/api/Categoria/Chokers`);

  const data = await res.json();

  return { props: { data } };
}

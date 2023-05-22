import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function CollaresPage({ data }) {
  return (
    <>
      <CategoryPage category={"Collares"}>
        <WraperProducts products={data.products} />
      </CategoryPage>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://mmchokers.vercel.app/api/Categoria/Collares`
  );

  const data = await res.json();

  return { props: { data } };
}

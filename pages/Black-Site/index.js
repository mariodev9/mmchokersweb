import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function BlackSitePage({ data }) {
  return (
    <CategoryPage category={"Black Site"}>
      <WraperProducts products={data.products} />
    </CategoryPage>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://mmchokers.vercel.app/api/Categoria/BlackSite`
  );

  const data = await res.json();

  return { props: { data } };
}

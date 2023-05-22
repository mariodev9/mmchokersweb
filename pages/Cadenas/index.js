import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function CadenasPage({ data }) {
  return (
    <CategoryPage category={"Cadenas"}>
      <WraperProducts products={data.products} />
    </CategoryPage>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/Categoria/Cadenas`);
  const data = await res.json();
  return { props: { data } };
}

import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function BilleterasPage({ data }) {
  return (
    <CategoryPage category={"Billeteras"}>
      <WraperProducts products={data.products} />
    </CategoryPage>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/Categoria/Billeteras`);

  const data = await res.json();

  return { props: { data } };
}

import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import { Layout } from "../../components/Layout/Layout";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";

export default function CadenasPage({ data }) {
  return (
    <CategoryPage category={"Cadenas"}>
      <WraperProducts products={data.products} />
    </CategoryPage>
  );
}

export async function getServerSideProps() {
  // https://mmchokers.vercel.app/api/Categoria/Cadenas
  const res = await fetch(`https://mmchokers.vercel.app/api/Categoria/Cadenas`);
  const data = await res.json();
  return { props: { data } };
}

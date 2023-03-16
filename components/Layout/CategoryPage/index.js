import React from "react";
import { Layout } from "../Layout";

export default function CategoryPage({ children }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}

// en server side props:
// obtener nombre de la ruta (params)
// traer los productos por categorias

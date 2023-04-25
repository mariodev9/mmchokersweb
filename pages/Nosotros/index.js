import { Box, Button, Text } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";

export default function NosotrosPage() {
  // const createPreference = () => {
  //   fetch("http://localhost:3000/api/preference", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(orderData),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPreferenceId(data.preference.id);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <Layout footer>
      <Box layerStyle={"layoutWraper"}>
        <Text fontSize={"20px"} textAlign={"center"} mb={"20px"}>
          Nosotros
        </Text>
      </Box>
    </Layout>
  );
}

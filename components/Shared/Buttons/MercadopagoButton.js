import { Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const MercadopagoButton = ({ product, buyerData }) => {
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const generatePaymentLink = async () => {
      setLoading(true);
      try {
        const { data: preference } = await axios.post("/api/checkout", {
          product,
          buyerData,
        });
        setPaymentUrl(preference.url);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    generatePaymentLink();
  }, [product]);

  const goToMercadopagoCheckout = () => {
    // if (buyerData && product && paymentUrl) {
    //   router.push(paymentUrl);
    // }
    router.push(paymentUrl);
  };

  return (
    <>
      <Button
        onClick={() => goToMercadopagoCheckout()}
        variant={"formbutton"}
        mt={"20px"}
        w={"full"}
        isLoading={loading}
        isDisabled={product.stock < 1}
      >
        Realizar el pago
      </Button>
    </>
  );
};

import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: `${process.env.MERCADOPAGO_ACCES_TOKEN}`,
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const product = req.body.product;
    const buyerData = req.body.buyerData;
    // console.log(buyerData, "Data del comprador");
    const URL = "https://mmchokers.vercel.app/";
    try {
      const preference = {
        items: product.map((item) => ({
          id: item.id,
          title: item.name,
          currency_id: "ARS",
          unit_price: Math.floor(item.price),
          quantity: item.quantity,
          description: item.description,
        })),

        // TODO: Agregar payer info, editar estilos de payment, subir a produccion, testear
        // payer: {
        //   name: "Juan",
        //   surname: "Lopez",
        //   email: "user@email.com",
        //   phone: {
        //     area_code: "11",
        //     number: "4444-4444",
        //   },
        //   identification: {
        //     type: "DNI",
        //     number: "12345678",
        //   },
        //   address: {
        //     street_name: "Street",
        //     street_number: 123,
        //     zip_code: "5700",
        //   },
        // },
        auto_return: "approved",
        back_urls: {
          success: `${URL}`,
          failure: `${URL}`,
        },
        statement_descriptor: "mmChokers",
        shipments: {
          cost: buyerData.shipping.price,
          mode: "not_specified",
        },
        // Hace que los pagos sean rechazados o aceptados, no hay pagos pendientes
        // binary_mode: true,
        notification_url: `${URL}/api/notify`,
      };

      const response = await mercadopago.preferences.create(preference);

      res.status(200).send({ url: response.body.init_point });
    } catch (error) {
      res.json(error);
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default handler;

export default function handler(req, res) {
  const accessToken =
    "TEST-1760691946910254-041823-cb78a1f45c5c294bc04360dfa3df1f21-757924230";

  const url = `https://api.mercadopago.com/checkout/preferences`;

  let preference = {
    items: [
      {
        title: "Producto 1",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 1000.0,
        // "id": "item-ID-1234",
        // "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
        // "description": "Descripción del Item",
        // "category_id": "art",
      },
    ],
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
    back_urls: {
      success: "http://localhost:8080/feedback",
      failure: "http://localhost:8080/feedback",
      pending: "http://localhost:8080/feedback",
    },
    auto_return: "approved",
  };

  const orderData = {
    quantity: "1",
    price: "10",
    amount: 10,
    description: "Some book",
  };

  if (req.method === "POST") {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preference),
    })
      .then((response) => response.json())
      .then((preference) => res.status(200).json({ preference }))
      .catch((error) => console.error(error));
  } else {
    return res.status(405).send("Method not allowed");
  }
}

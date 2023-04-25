import { useContext } from "react";
import CartContext from "../../../context/CartContext";

export default function handler(req, res) {
  const token =
    "TEST-1760691946910254-041823-cb78a1f45c5c294bc04360dfa3df1f21-757924230";

  const url = `https://api.mercadopago.com/v1/payment_methods/?access_token=${token}`;

  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) =>
      res.status(200).json({
        payments: json,
        message: `Productos obtenidos con exito`,
      })
    );

  // en el body  enviar cart use context
  //   res.status(200).json({
  //     products: [],
  //     message: `Productos obtenidos con exito`,
  //   });
}

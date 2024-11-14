import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ totalAmount }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AX3aZBFBy2LqtEZ2x_xX9gffQbf3MaA8fgPVVY_hMsmSVcdtpdZbkp_eoRmzq2NpeLZz7L4fH1wYEk1A" }}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Pago completado por ${details.payer.name.given_name}`);
          });
        }}
        onCancel={(data) => {
          alert("El pago fue cancelado.");
        }}
        onError={(err) => {
          console.error("Error en el proceso de pago de PayPal:", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export { PayPalButton };


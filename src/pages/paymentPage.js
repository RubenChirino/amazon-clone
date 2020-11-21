import React from "react";

//COMPONENTS
import Header from "../components/header";
import Paymemt from "../components/payment";

//PAYMENTS
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51HpfUYDimZRIs1Y6EJ4LBpMKzQ0J6xA1IxAU0ZfXMVfmAFi47esxEyIpmzeTw6hUtvdcKWcoHvpkrkmMtyRTTJMX00W0KPYmgB"
);

export default function PaymentPage() {
  return (
    <Elements stripe={promise}>
      <div className="paymentPage">
        <Header />
        <Paymemt />
      </div>
    </Elements>
  );
}

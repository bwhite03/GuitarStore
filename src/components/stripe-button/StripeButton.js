import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const stripeKey = "pk_test_kvvDPRQ4FAep60ymVmpigv3H00sfoqFsZ3";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Guitar World"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={stripeKey}
    />
  );
}

export default StripeButton;

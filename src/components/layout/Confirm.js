import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Confirm extends React.Component {
  onToken = token => {
    console.log("token===>", token);
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_EVFdXtsD9BPPelLFfrtWEYI200qfOe777q"
      />
    );
  }
}

// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   CardElement,
//   injectStripe,
//   Elements,
//   StripeProvider
// } from "react-stripe-elements";
// import CheckoutForm from "../layout/CheckoutForm";

// import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";
// toast.configure();
// class Confirm extends Component {
//   state = {
//     name: "Tesla Roadster",
//     price: 64998.67,
//     description: "Cool car"
//   };

//   render() {
//     const [product] = React.useState({
//       name: "Tesla Roadster",
//       price: 64998.67,
//       description: "Cool car"
//     });

// async function handleToken(token, addresses) {
//   const response = await axios.post(
//     "https://ry7v05l6on.sse.codesandbox.io/checkout",
//     { token, addresses }
//   );
//   console.log("res", token);
//   const { status } = response.data;
//   console.log("Response:", response.data);
//   if (status === "success") {
//     toast("Success! Check email for details", { type: "success" });
//   } else {
//     toast("Something went wrong", { type: "error" });
//   }
// }
//     return (
//       <div className="container">
//         <h1>Confirm Your Order</h1>

//         <StripeCheckout
//           stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
//           token={handleToken}
//           amount={this.state.price * 100}
//           name={this.state.name}
//           billingAddress
//           shippingAddress
//         />
//       </div>
//     );
//   }
// }

export default Confirm;

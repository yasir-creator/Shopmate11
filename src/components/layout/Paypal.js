import React, { useState, useRef, useEffect } from "react";
import chair from "../layout/chair.jpg";
import gif from "./giphy.gif";

function Paypal() {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 777.77,
    description: "fancy chair, like new",
    img: "assets/couch.jpg"
  };

  useEffect(() => {
    // Load Paypal Script
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZlVgnzwE23JY1RV0EduokJYzg1mKo5fumSVCkgvHtbLKXrUS-u-o5snBlnLxMshkXmZ51MfeGSCnLZ1";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: "USD",
                      value: product.price
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();

              setPaidFor(true);
              console.log(order);
            }
          })
          .render(paypalRef);
      });
    }
  });
  return (
    <div className="Paypal">
      {paidFor ? (
        <div>
          <h1
            style={{
              justifyContent: "center"
            }}
          >
            Congrats, you just bought comfiy chair
          </h1>
          <img src={gif} />
        </div>
      ) : (
        <div>
          <h1>
            {product.description} for ${product.price}
          </h1>
          <img src={chair} width="200" />
          <div ref={v => (paypalRef = v)} />
        </div>
      )}
    </div>
  );
}

export default Paypal;

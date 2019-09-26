import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SideBar from "./components/layout/SideBar";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
import ProductDetail from "./components/layout/ProductDetail";
import Pagination from "./components/layout/Pagination";
import CheckoutForm from "./components/layout/CheckoutForm";
import striperCheck from "./components/layout/striperCheck";
import Paypal from "./components/layout/Paypal";

// import CheckCart from "./components/layout/CheckCart";
import Demo from "./components/layout/Demo";
import Confirm from "./components/layout/Confirm";
import Payment from "./components/layout/Payment";
import Finish from "./components/layout/Finish";
import "./App.css";

//Check for token
// if (localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(CurrentUser(decoded));
//   const currentTime = Date.now() / 2000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href("/login");
//   }
// }

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div
          className="App"
          style={{
            backgroundColor: "rgb(235, 233, 233)"
          }}
        >
          <Header />

          <Route exact path="/" component={SideBar} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/pagination" component={Pagination} />
          <Route exact path="/checkoutform" component={CheckoutForm} />
          {/* <Route exact path="/check" component={CheckCart} /> */}
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/finish" component={Finish} />
          <Route exact path="/striper" component={striperCheck} />
          <Route exact path="/paypal" component={Paypal} />

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

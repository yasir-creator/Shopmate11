import React, { Component } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
// import Button from "@material-ui/core/Button";
// import "./cards.css";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";
import { cartItem } from "../../actions/cartAction";
import isEmpty from "../../validations/is-empty";
const theme = createMuiTheme();
let cartArray = [];
class SideBar extends Component {
  // Paginate
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  }

  // handleClick(offset) {
  //   console.log(offset);
  //   this.setState({ offset: offset });
  // }

  // End paginate

  componentDidMount() {
    this.props.getProducts();
  }

  handleClick = prodata => {
    // cartArray.push(prodata);
    // if (cartArray) {
    const foundIndex = cartArray.findIndex(
      cartpro => cartpro.product_id === prodata.product_id
    );
    console.log("hellllllo", foundIndex);
    if (foundIndex > 0 || foundIndex === 0) {
      cartArray[foundIndex].qty = cartArray[foundIndex].qty + 1;
    } else {
      prodata.qty = 1;
      cartArray.push(prodata);
    }
    // } else {
    //   cartArray = [];
    //   prodata.qty = 1;
    //   cartArray.push(prodata);
    // }
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh", cartArray);
    this.props.cartItem(cartArray);
  };

  render() {
    let carty = null;
    let detail = null;
    const { products } = this.props.productdata.userProduct;
    const { loading } = this.props.productdata;
    const { cartitems } = this.props.cartArray;
    console.log("12122121212121212121212122", this.props.cartArray.cartitems);

    let productdata;
    let i = 0;
    let j = 1;

    console.log("products ====>", products);
    if (products === null || loading || products === undefined) {
      productdata = "loading";
    } else {
      if (!isEmpty(products.rows)) {
        if (products.rows.length > 0) {
          productdata = products.rows.map(pro => (
            <div key={++i}>
              <div className="card mr-5 mb-2" style={{ width: "25rem" }}>
                <Link
                  to={{
                    pathname: "/productdetail",
                    state: { pro: pro }
                  }}
                >
                  <img
                    src="/assets/images/kid5.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{pro.name}</h5>
                  <p
                    className="card-text"
                    style={{
                      color: "black"
                    }}
                  >
                    <i className="fas fa-pound-sign fa-sm" />
                    {pro.price}
                  </p>
                </div>
                <div className="middle mt-5">
                  <button
                    className="btn baa btn-lg btn-danger"
                    onClick={() => this.handleClick(pro)}
                    style={{
                      borderRadius: 30
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ));
        }
      } else {
        productdata = <>Nothing to show</>;
      }
    }
    let totalprice = 0;
    // let itemprice;
    // let itemsize;
    // let itemcolor;
    // let itemqty;
    // Cart Items
    if (cartitems === null || cartitems === undefined) {
      carty = "loading";
    } else {
      if (cartitems.length > 0) {
        carty = cartitems.map(
          cartpro => (
            (totalprice += cartpro.price * cartpro.qty),
            (
              // (itemprice = cartpro.price),
              // (itemsize = cartpro.size),
              // (itemcolor = cartpro.color),
              // (itemqty = cartpro.qty),
              <div key={++j}>
                <div
                  className="row card-row"
                  style={{
                    float: "none",
                    textAlign: "start"
                  }}
                >
                  <div
                    className="card mt-5 mb-3 ml-1"
                    style={{
                      maxWidth: "100%"
                      // height: 50
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        // height: 100
                        backgroundColor: "rgb(209, 204, 204)",
                        padding: 10
                      }}
                    >
                      <p>
                        {cartpro.qty}
                        <span
                          style={{
                            color: "red"
                          }}
                        >
                          ×
                        </span>
                        {cartpro.name}
                        <i
                          className="fa fa-times "
                          style={{
                            color: "red",
                            // borderRadius: 20,l
                            float: "right"
                          }}
                        ></i>
                      </p>

                      <p className="product-size">Size: {cartpro.size}</p>
                      <p className="product-color">Color:{cartpro.color}</p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            )
          )
        );
      }
    }

    // Cart detail

    if (cartitems === null || cartitems === undefined) {
      detail = "loading";
    } else {
      if (cartitems.length > 0) {
        detail = cartitems.map(cartdetail => (
          <tr>
            <th scope="row">
              {" "}
              <img
                src="/assets/images/kid1.jpg"
                alt=""
                style={{
                  height: "20%",
                  width: "30%"
                }}
              />
            </th>
            <td>
              Size:
              {cartdetail.size}
              <br />
              <br />
              Color:
              {cartdetail.color}
            </td>
            <td>
              {/* <input
                                  type="number"
                                  className="mt-3"
                               
                                  style={{
                                    width: "70%",
                                    height: 25
                                  }}
                               
                                /> */}
              {cartdetail.qty}
            </td>
            <td>{cartdetail.price}</td>
            <td>
              <i
                className="fa fa-times"
                aria-hidden="true"
                style={{
                  color: "red",
                  borderRadius: 20
                }}
              ></i>
            </td>
          </tr>

          //  {/* End Model of view products detail*/}
        ));
      }
    }

    return (
      <div className="app">
        <div className="row text-center mt-3">
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Pagination
              limit={10}
              offset={this.state.offset}
              total={120}
              onClick={(e, offset) => this.handleClick(offset)}
            />
          </MuiThemeProvider>
        </div>
        {/* collection */}
        <section className="mt-4">
          <div className="container-fluid">
            <div className="row mx-1">
              {/* sidebar */}
              <div
                className="col-lg-2 col-md-5 col-sm-5 bg-white text-center sidebar mb-5 "
                style={{
                  height: "100%"
                }}
              >
                <div className="active-pink-3 active-pink-4 mb-4 mt-3">
                  <form>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
                <h4 className="text-muted mt-4 mb-3 mr-5 font-weight-bold ">
                  Department
                </h4>
                <div className="reg011 p-2" id="reg">
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    REGIONAL
                  </a>
                </div>
                <div className="reg011 p-2 mt-2" id="nat">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    NATURE
                  </a>
                </div>
                <div className="reg011 p-2 mt-2" id="sea">
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    SEASONAL
                  </a>
                </div>
                <div
                  className="col-lg-2 col-md-5 col-sm-5 bg-white sidebar mb-5"
                  id="regional1"
                  style={{ display: "none" }}
                >
                  <h4
                    className="text-muted text-center cat11 mt-4 mb-3 font-weight-bold "
                    style={{
                      justifyContent: "center"
                    }}
                  >
                    Category
                  </h4>
                  <div className="reg02 p-2  ">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      FRENCH
                    </a>
                  </div>
                  <div className="reg02 p-2  mt-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      ITALIAN
                    </a>
                  </div>
                  <div className="reg02 p-2  mt-2 ">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      IRISH
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-5 col-sm-5 bg-white sidebar mb-5"
                  id="nature2"
                  style={{ display: "none" }}
                >
                  <h4 className="text-muted cat11 mt-4 mb-3  font-weight-bold ">
                    Category
                  </h4>
                  <div className="reg02 p-2 text-center mt-2 ">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      ANIAMAL
                    </a>
                  </div>

                  <div className="reg02 p-2 text-center mt-2 ">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      FLOWER
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-5 col-sm-5 bg-white sidebar mb-5"
                  id="seasonal3"
                  style={{ display: "none" }}
                >
                  <h4 className="text-muted cat11 mt-4 mb-3  font-weight-bold ">
                    Category
                  </h4>
                  <div className="reg02 p-2 text-center mt-2 ">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      CRISTMAS
                    </a>
                  </div>
                  <div className="reg02 p-2 text-center mt-2 ">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      VALENTINE'S
                    </a>
                  </div>
                </div>
                {/* <div
                  className="row card-row"
                  style={{
                    float: "none",
                    textAlign: "start"
                  }}
                > */}
                {/* <div
                  className="card mt-5 mb-3 ml-1"
                  style={{
                    maxWidth: "100%"
                    // height: 50
                  }}
                > */}
                {/* <div
                    className="card-body"
                    style={{
                      // height: 100
                      backgroundColor: "rgb(209, 204, 204)",
                      padding: 10
                    }}
                  > */}
                {carty}

                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                <div
                  className="row ml-auto"
                  style={{
                    float: "right"
                  }}
                >
                  Total Price:
                  <h6>
                    <span
                      style={{
                        color: "red",
                        margin: 15
                      }}
                    >
                      {" "}
                      $ {totalprice}
                    </span>{" "}
                  </h6>
                </div>
                {/* Model of view products detail*/}
                <button
                  type="button"
                  className="btn btn-danger  mt-3  mb-3 "
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  style={{
                    borderRadius: 30
                  }}
                >
                  View Details
                </button>
                <div
                  className="modal fade bd-example-modal-lg"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                  style={{
                    height: 900
                  }}
                >
                  <div className="modal-dialog modal-lg">
                    <div
                      className="modal-content"
                      style={{
                        maxHeight: 870,
                        overflow: "auto"
                      }}
                    >
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true ml-auto">×</span>
                        </button>
                      </div>
                      <div className="model-body mt-3 ">
                        <table className="table text-center table-fixed ">
                          <thead
                            className="table-head"
                            style={{
                              backgroundColor: "rgb(250, 250, 250)",
                              position: "sticky"
                            }}
                          >
                            <tr>
                              <th
                                scope="col"
                                style={{
                                  color: "rgb(90, 89, 89)"
                                }}
                              >
                                Item
                              </th>
                              <th
                                scope="col"
                                style={{
                                  color: "rgb(90, 89, 89)"
                                }}
                              >
                                Options
                              </th>
                              <th
                                scope="col"
                                style={{
                                  color: "rgb(90, 89, 89)"
                                }}
                              >
                                Quantitiy
                              </th>
                              <th
                                scope="col"
                                style={{
                                  color: "rgb(90, 89, 89)"
                                }}
                              >
                                Price
                              </th>
                              <th
                                scope="col"
                                style={{
                                  color: "rgb(90, 89, 89)"
                                }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody
                            className="tbody"
                            style={{
                              maxHeight: 300,

                              overflow: "scroll"
                            }}
                          >
                            {detail}
                          </tbody>
                        </table>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-lg btn-danger "
                          style={{
                            borderRadius: 30
                          }}
                        >
                          <Link
                            to="/demo"
                            style={{
                              textDecoration: "none",
                              color: "white"
                            }}
                          >
                            CheckOut
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End Model of view products detail*/}
                {/* <button
                  className="btn  btn-danger mb-2"
                  style={{
                    borderRadius: 30
                  }}
                >
                  <Link
                    to="/checkout"
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                  >
                    View Details
                  </Link>
                </button> */}
              </div>
              {/* cards */}

              <div className="col-lg-10 col-md-7 col-sm-7 mb-5">
                <div
                  className="row"
                  style={{
                    marginLeft: 0
                  }}
                >
                  {productdata}
                </div>

                {/* end of cards */}
              </div>
            </div>
          </div>
        </section>

        <div className="row text-center mt-3">
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Pagination
              limit={10}
              offset={this.state.offset}
              total={100}
              onClick={(e, offset) => this.handleClick(offset)}
            />
          </MuiThemeProvider>
        </div>
        {/* end of collection */}
        {/* ad */}
        <section>
          <div className="container-fluid mx-3">
            <div className="row">
              <div className="col">
                <img src="assets/images/ad.jpg" className="ad-img" />
              </div>
            </div>
          </div>
        </section>
        {/* end of ad */}

        {/* end of sidebar */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productdata: state.product,
  cartArray: state.cart
});
export default connect(
  mapStateToProps,
  { getProducts, cartItem }
)(SideBar);

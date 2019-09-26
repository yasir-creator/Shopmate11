import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ProductDetail extends Component {
  componentDidMount() {
    const { pro } = this.props.location.state;
    if (pro === null || pro === undefined) {
      this.props.history.push("/");
    }
  }
  render() {
    const { pro } = this.props.location.state;
    console.log(pro);

    return (
      <div>
        <div className=" mt-5 ml-3">
          <div className="card mb-5 ml-4">
            <div className="card-body">
              <div className="row">
                <div
                  className="col-xs-12 col-sm-6 col-md-5 col-lg-4  mt-4 ml-5"
                  style={{
                    border: "1px solid black",
                    padding: 15,
                    margin: "0%",
                    height: "fit-content",
                    maxWidth: "20%"
                  }}
                >
                  <Carousel>
                    <div>
                      <img src="assets/images/kid1.jpg" />
                    </div>
                    <div>
                      <img src="assets/images/kid1.jpg" />
                    </div>
                    <div>
                      <img src="assets/images/kid1.jpg" />
                    </div>
                  </Carousel>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8 mt-3">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    Home
                  </Link>
                  / Gallic Cock
                  <h1
                    className="card-title "
                    style={{
                      fontSize: 30
                    }}
                  >
                    {pro.name}
                  </h1>
                  <h1
                    style={{
                      color: "red"
                    }}
                  >
                    {pro.price}{" "}
                    <span
                      style={{
                        fontSize: 30,
                        color: "black"
                      }}
                    >
                      <del>
                        <i className="fas fa-dollar-sign fa-sm" />
                        18.99
                      </del>
                    </span>
                  </h1>{" "}
                  <p className="card-text mt-3">{pro.description}</p>
                  <h3 className="mt-3">Quantity:</h3>
                  <input
                    type="number"
                    className="mt-3"
                    style={{
                      width: "10%"
                    }}
                  />
                  <div className="filter-size mt-3">
                    <h4 className="mb-3">Sizes</h4>
                    <button
                      className="btn btn-light b-size mt-1 mr-1"
                      style={{
                        width: 150
                      }}
                    >
                      XS
                    </button>
                    <button
                      className="btn btn-light b-size mt-1 mr-1"
                      style={{
                        width: 150
                      }}
                    >
                      S
                    </button>
                    <button
                      className="btn btn-light b-size mt-1 mr-1"
                      style={{
                        width: 150
                      }}
                    >
                      M
                    </button>
                    <button
                      className="btn btn-light b-size mt-1 mr-1"
                      style={{
                        width: 150
                      }}
                    >
                      LG
                    </button>
                    <button
                      className="btn btn-light b-size mt-1 mr-1"
                      style={{
                        width: 150
                      }}
                    >
                      XL
                    </button>
                  </div>
                  <div className="filter-color mt-3">
                    <h4 className="mb-3">Color</h4>
                    <button
                      className="btn btn-light b-color mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      White
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Black
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Red
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Orange
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Yellow
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Green
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Blue
                    </button>
                    <button
                      className="btn btn-light mt-1 b-color  mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Indigo
                    </button>
                    <button
                      className="btn btn-light b-color mt-1 mr-1"
                      style={{
                        width: 100
                      }}
                    >
                      Purple
                    </button>
                  </div>
                  <button
                    className="btn btn-light b-color btn-lg mt-5"
                    style={{
                      borderRadius: 25
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

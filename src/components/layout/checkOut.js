import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./checkout.css";

class checkOut extends Component {
  render() {
    return (
      <div>
        {/* Large modal */}
        <button
          type="button"
          className="btn btn-primary btn-lg mt-5  mb-5 ml-5"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
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
                      <td>1</td>
                      <td>
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
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
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {" "}
                        <img
                          src="/assets/images/kid1.jpg"
                          alt=""
                          style={{
                            height: "20%",
                            width: "30%",
                            margin: "10%"
                          }}
                        />
                      </th>
                      <td>1</td>
                      <td>
                        {" "}
                        <input
                          type="number"
                          className="mt-3"
                          style={{
                            width: "70%",
                            height: 25
                          }}
                        />
                      </td>
                      <td> $12</td>
                      <td>
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{
                            color: "red"
                          }}
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-lg btn-danger"
                  style={{
                    borderRadius: 30
                  }}
                >
                  <Link
                    to="/check"
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
      </div>
    );
  }
}

export default checkOut;

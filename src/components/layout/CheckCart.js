import React, { Component } from "react";
// import Demo from "../layout/Demo";

class CheckCart extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      region: "",
      type: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userinfo = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      zipcode: this.state.zipcode,
      region: this.state.region,
      type: this.state.type
    };
    localStorage.setItem("cartinfo", JSON.stringify(userinfo));
    console.log("haevy", userinfo);
  };

  render() {
    // const { userinfo } = this.state;
    // console.log("heavyyyyyyyyy", userinfo);
    return (
      <div className="container-fluid mt-3 mb-5 ">
        <div className="row ml-0">
          <div className="card ">
            <div className="card-body">
              {/* Stepper */}
              {/* <Demo /> */}

              {/*End  Stepper */}
              <form onSubmit={this.onSubmit}>
                <div
                  className="form-row"
                  style={{
                    fontSize: 20
                  }}
                >
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputFirstname4"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="inputFirstname4"
                      onChange={this.onChange}
                      value={this.state.firstname}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputLastname4"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="inputLastname4"
                      onChange={this.onChange}
                      value={this.state.lastname}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputAddress4"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      id="inputAddress4"
                      onChange={this.onChange}
                      value={this.state.address}
                    />
                  </div>
                </div>

                <div
                  className="form-row"
                  style={{
                    fontSize: 20
                  }}
                >
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputCity"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      id="inputCity"
                      onChange={this.onChange}
                      value={this.state.city}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputState"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      id="inputState"
                      onChange={this.onChange}
                      value={this.state.state}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputCountry"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      className="form-control"
                      id="inputCountry"
                      onChange={this.onChange}
                      value={this.state.country}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputZip"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      Zip Code
                    </label>
                    <input
                      type="number"
                      name="zipcode"
                      className="form-control"
                      id="inputZip"
                      onChange={this.onChange}
                      value={this.state.zipcode}
                    />
                  </div>
                </div>
                <div className="form-row mt-4">
                  <h4
                    style={{
                      color: "rgb(128, 125, 125)"
                    }}
                  >
                    Shipping
                  </h4>
                </div>
                <div
                  className="form-row"
                  style={{
                    fontSize: 20
                  }}
                >
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputRegion"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      Region
                    </label>
                    <select
                      id="inputState"
                      name="region"
                      className="form-control"
                      onChange={this.onChange}
                      value={this.state.region}
                    >
                      <option selected>US / Canada</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="inputType"
                      style={{
                        color: "rgb(128, 125, 125)"
                      }}
                    >
                      Type
                    </label>
                    <select
                      id="inputState"
                      name="type"
                      className="form-control"
                      onChange={this.onChange}
                      value={this.state.type}
                    >
                      <option selected>Next Day Delivery ($20)</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{
                    marginLeft: 615,
                    borderRadius: 30
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckCart;

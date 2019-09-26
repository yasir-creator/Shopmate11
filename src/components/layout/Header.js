import React, { Component } from "react";
import classnames from "classnames";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("hello", newUser);
    //   this.props.regUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        {/* 2st navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a
            className="navbar-brand font-weight-bold text-danger ml-4 mr-xl-5 mr-md-3 my-2"
            href="index.html"
            style={{ fontSize: 30 }}
          >
            S H O P M A T E
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent2"
          >
            <a
              className=" mr-2 ml-auto"
              data-toggle="modal"
              data-target="#exampleModalCenter1"
              href="/register"
              style={{
                textDecoration: "none"
              }}
            >
              <h6 className=" font-weight-bold" style={{ color: "red" }}>
                Sign up
              </h6>
            </a>

            <h6 className="mr-2 font-weight-bold " style={{ color: "red" }}>
              |
            </h6>
            <a
              className=" mr-2"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              href="/login"
              style={{
                textDecoration: "none"
              }}
            >
              <h6 className="mr-2 font-weight-bold " style={{ color: "red" }}>
                Log in
              </h6>
            </a>
          </div>
        </nav>

        {/* Modal Register*/}
        <div
          className="modal fade"
          id="exampleModalCenter1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLongTitle">
                  Register Here
                </h5> */}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("input", {
                        "is-invalid": errors.email
                      })}
                      value={this.state.email}
                      onChange={this.onChange}
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("input", {
                        "is-invalid": errors.password
                      })}
                      value={this.state.password}
                      onChange={this.onChange}
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="row text-center mb-3">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        borderRadius: 30,
                        width: "25%",
                        height: 40,
                        color: "white",
                        backgroundColor: "#f02157"
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                  <h6
                    style={{
                      color: "#C0C0C0"
                    }}
                  >
                    Use another service to sign up
                  </h6>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Login */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("input", {
                        "is-invalid": errors.email
                      })}
                      value={this.state.email}
                      onChange={this.onChange}
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("input", {
                        "is-invalid": errors.password
                      })}
                      value={this.state.password}
                      onChange={this.onChange}
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="row text-center mb-3">
                    <button
                      type="submit"
                      className="btn  "
                      style={{
                        borderRadius: 30,
                        width: "25%",
                        height: 40,
                        backgroundColor: "#f02157",
                        color: "white"
                      }}
                    >
                      Login
                    </button>
                  </div>
                  <h6
                    style={{
                      color: "#C0C0C0"
                    }}
                  >
                    Use another service to login
                  </h6>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end of 2nd navbar */}
        <div>{/* Button trigger modal */}</div>
      </div>
    );
  }
}

export default Header;

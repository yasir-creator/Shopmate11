import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* footer */}
        <footer className="bg-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 text-center mt-5">
                {/* <ul class="list-inline">
        <li class="list-inline-item">
          <a href="#" class="font-weight-bold mr-5 ml-5 footer-link"
            >Women</a
          >
        </li>
        <li class="list-inline-item">
          <a href="#" class="font-weight-bold mr-5 ml-5 footer-link"
            >Men</a
          >
        </li>
        <li class="list-inline-item">
          <a href="#" class="font-weight-bold mr-5 ml-5 footer-link"
            >Kids</a
          >
        </li>
        <li class="list-inline-item">
          <a href="#" class="font-weight-bold mr-5 ml-5 footer-link"
            >Shoes</a
          >
        </li>
        <li class="list-inline-item">
          <a href="#" class="font-weight-bold mr-5 ml-5 footer-link"
            >Brands</a
          >
        </li>
      </ul>
    </div>
  </div> */}
                <div className="row">
                  <div className="col-sm-12 mt-3 text-center">
                    <ul className="list-inline">
                      <li className="list-inline-item mr-4">
                        <a href="#" className="text-dark">
                          <span className="dotf text-center">
                            <i className="fab fa-facebook-f fa-lg mt-2" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item mr-4">
                        <a href="#" className="text-dark">
                          <span className="doti text-center">
                            <i className="fab fa-instagram fa-lg mt-2" />
                          </span>
                        </a>
                      </li>
                      <a href="#" className="text-dark mr-4">
                        <span className="dott text-center">
                          <i className="fab fa-twitter fa-lg mt-2" />
                        </span>
                      </a>
                      <a href="#" className="text-dark">
                        <span className="doty text-center">
                          <i className="fab fa-youtube fa-lg mt-2" />
                        </span>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center mt-4">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="text-muted">
                          <h6>
                            ©2016 shopmate LTD <span className="dotc ml-2" />
                          </h6>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-muted">
                          <h6>
                            Contact <span className="dotc ml-2" />
                          </h6>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-muted">
                          <h6>Privacy policy</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end of footer */}
      </div>
    );
  }
}

export default Footer;

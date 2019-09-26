import React, { Component } from "react";
import SideBar from "../layout/SideBar";
import "./pagination.css";
// import { connect } from "react-redux";

class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      productdata: [],
      currentPage: 1,
      productdataPerPage: 10
    };

    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   this.setState({
  //     productdata: this.state.productdata
  //   });
  // }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
      productdata: this.state.productdata
    });
  }
  render() {
    //pagination
    const { productdata, currentPage, productdataPerPage } = this.state;
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", productdata);

    //Logic for displaying current productdata
    const indexOfLastArray = currentPage * productdataPerPage;
    const indexOfFirstArray = indexOfLastArray - productdataPerPage;

    const currentArray = productdata.slice(indexOfFirstArray, indexOfLastArray);

    const renderArray = currentArray.map((productdata, index) => {
      return <li key={index}>{productdata}</li>;
    });
    //Logic for displaying page number
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(productdata.length / productdataPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    //end pagination
    return (
      <div>
        <div className="row">
          <ul>{renderArray}</ul>
          <ul id="page-numbers">{renderPageNumbers}</ul>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   productdatadata: state.productdata
// });

export default // connect(
//   mapStateToProps,
//   getproductdatas
// )(
Pagination;
// );

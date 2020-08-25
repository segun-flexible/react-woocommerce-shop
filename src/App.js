import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/App.css";
import NavBar from "./Components/NavBar";
import HeroSlider from "./Components/HeroSlider";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <HeroSlider />
        <Product />
        <Cart />
      </>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, null)(App);

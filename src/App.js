import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import HomePage from "./components/HomePage";
import CarResults from "./components/CarResults";
import { addItem, removeItem } from "./actions/storeActions";

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item);
  };

  return (
    <>
    <Route exact path="/" component={HomePage} />
    <Route path="/CarResults" render={(props) => {
      return <CarResults
        car={props.car}
        buyItem={buyItem}
        removeItem={removeFeature}
        additionalFeatures={props.additionalFeatures}
        additionalPrice={props.additionalPrice} />
    }} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {addItem, removeItem}
)(App)

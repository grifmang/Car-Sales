import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total"

const CarResults = (props) => {

    return (
        <div>
            <div className="boxes">
                <div className="box">
                    <Header car={props.car} />
                    <AddedFeatures car={props.car} removeItem={props.removeItem}/>
                </div>
                <div className="box">
                    <AdditionalFeatures buyItem={props.buyItem} additionalFeatures={props.additionalFeatures} />
                    <Total car={props.car} additionalPrice={props.additionalPrice} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures
    };
  };
  
  export default connect(
    mapStateToProps
  )(CarResults)
import React from "react";
import { Link } from "react-router-dom";

const BikeCard = (props) => {

    return (
        <div class="card">
            <div class="card-content">
                <p class="title">
                {props.make}
                </p>
                <p class="subtitle">
                {props.type}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                {/* Change to Google Search */}
                <span>
                    View on <a href="#">Google</a>
                </span>
                </p>
                <p class="card-footer-item">
                    {/* Change to DuckDuckGo Search */}
                <span>
                    <Link to="/CarResults" make={props.make}>Add Features</Link>
                </span>
                </p>
            </footer>
            </div>
    )
}

export default BikeCard;
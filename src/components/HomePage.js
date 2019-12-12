import React, { useEffect, useState } from "react";
import axios from 'axios';
import BikeCard from "./BikeCard";


const HomePage = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/motorcycle?format=json')
        .then(response => {
            setApiData(response.data.Results);
        })
    }, [])

    return (
        <div className="main-content">
        {console.log(apiData)}
        {apiData.map((element, index) => {
            if (index < 11) {
                return <BikeCard make={element.MakeName} type={element.VehicleTypeName} key={element.MakeId} id={element.MakeId} />
            }
        })}
        </div>
    )
}

export default HomePage;
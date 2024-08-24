import React from "react";
import CovidMap from "../components/covidMap";
import CovidChart from "../components/covidChart";

function Chartpage(){
    return(
        <div>
            <CovidChart />
            <CovidMap/>
            
        </div>
    )
}
export default Chartpage;
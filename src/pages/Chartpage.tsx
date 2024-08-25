import React from "react";
import CovidMap from "../components/covidMap";
import CovidChart from "../components/covidChart";

function Chartpage(){
    return(
        <div className="flex flex-col md:flex-row align-middle mt-10 md:mt-32">
            <CovidChart />
            <CovidMap/>
            
        </div>
    )
}
export default Chartpage;
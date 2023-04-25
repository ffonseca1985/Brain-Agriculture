import React from "react";
import PieCulture from "../../components/dashboard/pieCulture";
import PieSolo from "../../components/dashboard/pieSolo";
import PieStates from "../../components/dashboard/pieStates";
import { Totals } from "../../components/dashboard/totals";

const Dashboards : React.FC = () => {
    
    return (
        <React.Fragment>
            <Totals />
            <PieCulture />
            <PieSolo />
            <PieStates />
        </React.Fragment>
    )
}

export default Dashboards;

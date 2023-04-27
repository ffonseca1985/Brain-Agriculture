import React from "react";
import PieLand from "../../components/dashboard/pieLand";
import PieStates from "../../components/dashboard/pieStates";
import { TableTotals } from "../../components/dashboard/totals";

const Dashboards : React.FC = () => {
    
    return (
        <React.Fragment>
            <TableTotals />
            <PieStates />
            <PieLand />
        </React.Fragment>
    )
}

export default Dashboards;

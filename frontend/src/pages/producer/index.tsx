
import React from "react"
import Create from "../../components/producer/create"
import ReadTable from "../../components/producer/read"

const Producer : React.FC<any> = () => {

    return (
        <React.Fragment>
            <ReadTable />
            <Create />
        </React.Fragment>
    );
}

export default Producer
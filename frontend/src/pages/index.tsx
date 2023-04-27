import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Producer</h5>
                            <p className="card-text">Learn more about our producers and how they make our products.</p>
                            <Link to={"/producer"} className="btn btn-link" >Visit Producer</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Graphics</h5>
                            <p className="card-text">Discover our latest graphics cards and how they can enhance your computing experience.</p>
                            <Link to={"/dashboards"} className="btn btn-link">Visit Graphics</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
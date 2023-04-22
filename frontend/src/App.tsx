import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return <React.Fragment>
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  </React.Fragment>;
}

export default App;

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BRAIN AGRICULTURE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/producer">
              Producer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboards">
              Dashboards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
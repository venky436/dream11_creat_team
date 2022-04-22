import React from 'react'
import '../Navbar/Nav.css'
import { Link } from 'react-router-dom';
export const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-10 d-flex align-items-center justify-content-center">
          {/* <h3 id='title'>Dream11</h3> */}
          <div className="row d-flex align-items-center  justify-content-between">
            <div className="col-md-11 col-11 col-sm-11 d-flex align-items-center justify-content-center">
              <Link to="/">
                <img
                  src="https://egr.global/intel/wp-content/uploads/sites/2/2019/04/d11.png"
                  id="title"
                />
              </Link>
            </div>
            <div className="col-md-1 col-1 col-sm-1 d-flex align-items-center justify-content-end ">
              <Link to="/teams ">
                <button className=" btn btn-outline-success" id='btnn'>Teams</button>
              </Link>
            </div>

            {/* <Link to='/create/team'>Create</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

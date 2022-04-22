import React,{useEffect,useState} from 'react'
import '../Body/Body.css'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'


export const Body = (props)=>{
 
 let [timee,setTimee] = useState()

  let createHandler =()=>{
    props.history.push('/create/team')
  }
  useEffect(()=>{
    setInterval(() => {
      const current = new Date();
      // By default US English uses 12hr time with AM/PM
      const time = current.toLocaleTimeString("en-US");
      setTimee(time)
    }, 1000);
  })
  
  return (
    <div className="container">
      <div className="row design w-100 h-100  my-3 shadow-lg">
        {/* <div className="col-md-12 d-block w-100 h-100"> */}
        {/* <div className="row bg-light design w-100 h-100"> */}

        <div className="col-md-4 col-4 col-sm-4 c  d-flex align-items-center justify-content-center">
          <div className="row  w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="col-md-12 col-12 col-sm-12 main">
              <h3>Hydrabad</h3>
              <img
                src="https://wallpapercave.com/wp/wp4128424.jpg"
                id="left-img"
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-4 col-sm-4 c">
          <div className="row  w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="col-md-12 col-12 col-sm-12 main">
              <Link
                to="/create/team"
                id="btn"
                className="btn btn-outline-success"
              >
                Create Team
              </Link>
              {/* <Link
                to="/"
                id="btn"
                className="btn btn-outline-success"
              >
                Join Context
              </Link> */}

              <h4>{timee}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-4 col-sm-4 c d-flex align-items-center justify-content-center">
          <div className="row  w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="col-md-12 col-12 col-sm-12 main">
              <h3>kolkata</h3>
              <img
                src="https://wallpaperaccess.com/full/3411335.jpg"
                id="left-img"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>

      {/* Second */}
     
    </div>
  );
}

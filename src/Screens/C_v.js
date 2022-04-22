import React,{Children, useState} from 'react'
import '../components/CreatePage/Create.css'
import { mainTeam } from '../components/CreatePage/Create';
import { Link } from 'react-router-dom';


export const Team = []



export const C_v = ({history}) => {

  let [team,setTeam] = useState(mainTeam)

  let [cap,setCap] = useState(true)
  let [vc, setVc] = useState(true);

  let [main_name,setMain_name] = useState('')

 

// CAPTAIN
   let t_name;


  function captainHandler(tt,e){

   if(main_name !== ''){
      let gr = document.querySelectorAll(".ccc");

      for (let i = 0; i < gr.length; i++) {
        if (gr[i] == tt) {
          gr[i].classList.toggle("active");
          setCap(!cap);
        } else {
          if (cap == true) {
            gr[i].setAttribute("disabled", "disabled");
          } else {
            gr[i].removeAttribute("disabled");
          }
        }
      }
      if (cap == true) {
        Team.push({
          name: main_name,
          total_points: 0,
          team_main: mainTeam,
          captain: e.name,
          v_captain: "",
        });
        return console.log(Team);
      } else {
        let exit = Team && Team.find((ee) => ee.name == e.name);
        Team.splice(exit);
        return console.log(Team);
      }

   }else{
     alert('Please give the Team name first')
   }
    
   
  }


  // V_S 
  let vcHandler = (tt,e)=>{
    let id = Team.find((e)=>e.name == main_name)
    if(e.name !== id.captain){
      let gr = document.querySelectorAll(".vvv");

      for (let i = 0; i < gr.length; i++) {
        if (gr[i] == tt) {
          gr[i].classList.toggle("active");
          setVc(!vc);
        } else {
          if (vc == true) {
            gr[i].setAttribute("disabled", "disabled");
          } else {
            gr[i].removeAttribute("disabled");
          }
        }
      }

    }else{
      return alert('VC should not be equal to Captain')
    }
     
     if (vc == true) {
      
      let tq = Team.find((e)=>e.name == main_name)
      
       tq.v_captain = e.name;
       return console.log(tq);
     }else{
      let tq = Team.find((e)=>e.name == main_name)
       tq.v_captain = "";
       return console.log(tq)
     }

  }

  let saveHandler = ()=>{
     localStorage.setItem('mainTeams',JSON.stringify(Team))
     setCap(true)
     setVc(true)
     mainTeam.length = 0
     
  }

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center px-3">
        <div className="col-md-12 main-c">
          <h3>Choose your Captain and Vice Captain</h3>
          <span>C gets 1*2 , VC gets 1*1.5</span>
          <input
            id="input"
            type="text"
            placeholder="Enter Team Name"
            value={main_name}
            onChange={(e) => setMain_name(e.target.value)}
          />
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center px-3">
        <div className="col-md-12 d-flex align-items-center justify-content-end">
          <span className="m-3 fs-4 bg-light px-2 py-1">C - {cap ? 1 : 0}</span>
          <span className="m-3 fs-4 bg-light px-2 py-1">VC - {vc ? 1 : 0}</span>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center my-4 bg-dark text-white py-2 px-3">
        <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center">
          <h3>&nbsp;</h3>
        </div>
        <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center">
          <h3>Name</h3>
        </div>
        <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center">
          <h3>%C BY</h3>
        </div>
        <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center">
          <h3>% VC BY</h3>
        </div>
      </div>

      {team.map((ele, index) => (
        <div className="row d-flex align-items-center justify-content-center my-4 bg-light px-3 py-1">
          <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center">
            <span
              id="team"
              className={ele.team == "srh" ? "bg-danger" : "bg-primary"}
            >
              {ele.team}
            </span>
            <img src={ele.image} id="c-img" />
            <span
              id="team"
              className={
                ele.role == "all"
                  ? "bg-warning"
                  : ele.role == "bat"
                  ? "bg-danger"
                  : ele.role == "wk"
                  ? "bg-success"
                  : "bg-primary"
              }
            >
              {ele.role}
            </span>
          </div>
          <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center">
            <h3>{ele.name}</h3>
          </div>
          <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center cap">
            <button
              className="c-v ccc "
              onClick={(e) => {
                let t = e.target;
                return captainHandler(t, ele);
              }}
            >
              C
            </button>
          </div>
          <div className="col-md-3 col-3 col-sm-3 d-flex align-items-center justify-content-center vc">
            <button
              disabled={cap ? true : false}
              className="c-v vvv"
              onClick={(e) => {
                let t = e.target;
                return vcHandler(t, ele);
              }}
            >
              VC
            </button>
          </div>
        </div>
      ))}

      <div className="row d-flex align-items-center justify-content-end px-3">
        <div className="col-md-3 col-3 col-sm-3 ">
          {cap || vc ? (
            ""
          ) : (
            <Link
              to="/"
              onClick={saveHandler}
              className="btn btn-outline-success"
              id="save-btn"
              
            >
              Save Team
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}


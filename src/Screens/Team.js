import React,{useState,useEffect} from 'react'
import '../components/CreatePage/Create.css'

export const Team = () => {
 let [teams,setTeams] = useState([])
 let [prv,setPrv] = useState(false)

//  let [ke,setKe] = useState()


 useEffect(()=>{
     let data =JSON.parse(localStorage.getItem('mainTeams'))
     setTeams(data)
 },[])








//  let bating;
//  let bowler;
//  let keepers = ke.team_main.filter((ele) => ele.role == "wk");
//  let allrounders;
// let prvHandler = (e)=>{
//     // return setPrv(!prv)
//     console.log(e)
//     let kep = teams.find((x)=>x.name == e)
//     // console.log(kep)
//     setKe(kep)
//     keepers = kep.team_main.filter((ele) => ele.role == 'wk');
//     console.log(keepers)

//     bating = teams.filter((ele) =>
//        ele.team_main.filter((x) => x.role === "bat")
//      );
//     bowler = teams.filter((ele) =>
//        ele.team_main.filter((x) => x.role === "bowl")
//      );
//     allrounders = teams.filter((ele) =>
//        ele.team_main.filter((x) => x.role === "all")
//      );
// }


//  console.log(keepers)
  return (
    <>
      <div className="container">
        <div className="row  shadow-lg team-row-nav bg-dark text-white">
          <div className="col-md-4 col-4 col-sm-4">
            <h2>Team Name</h2>
          </div>
          <div className="col-md-3 col-3 col-sm-3">
            <h2>captain</h2>
          </div>
          <div className="col-md-3 col-3 col-sm-3">
            <h2>v captain</h2>
          </div>
          <div className="col-md-1 col-1 col-sm-1">
            <h2>Preview</h2>
          </div>
        </div>

        {teams.map((ele, index) => (
          <div className="row team-row shadow-lg" key={index}>
            <div className="col-md-4 col-4 col-sm-4">
              <h2>{ele.name}</h2>
            </div>
            <div className="col-md-3 col-3 col-sm-3">
              <h2>{ele.captain}</h2>
            </div>
            <div className="col-md-3 col-3 col-sm-3">
              <h2>{ele.v_captain}</h2>
            </div>
            <div className="col-md-1 col-1 col-sm-1">
              <button className="btn btn-outline-success" disabled={true}>Preview</button>
            </div>
          </div>
        ))}

        
      </div>
    </>
  );
}

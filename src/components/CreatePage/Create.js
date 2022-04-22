import React,{useState,useEffect} from 'react'
import '../CreatePage/Create.css'
import { players } from '../../Players'
import {Link} from 'react-router-dom'


export let mainTeam = []


export const Create = () =>{

  // const [mainTeam,setMainTeam] = useState([])
  // let local = JSON.parse(localStorage.getItem('teams'))
  let b = players.filter((ele)=>ele.role == 'wk')


 let t_t = mainTeam.reduce((a,e)=>a+e.credits,0)


  let [play,setPlay] = useState(b)

  let [total,setTotal] = useState(100-t_t)

  let [prv,setPrv] = useState(false)

  
  let keeperHandler = (e)=>{
      let keep = players.filter((x)=>x.role == 'wk')
      console.log(e.target)
      e.target.classList.add('red')
      return setPlay(keep)
  }
  let batHandler = (e)=>{
    let bat = players.filter((x) => x.role == "bat");
     e.target.classList.add("red");
    return setPlay(bat);

  }
  let allHandler = (e)=>{
    let all = players.filter((x) => x.role == "all");
     e.target.classList.add("red");
    return setPlay(all);

  }
  let bowlerHandler = (e)=>{
    let bowl = players.filter((x) => x.role == "bowl");
     e.target.classList.add("red");
    return setPlay(bowl);

  }

  // Add item
  let addHandler = (name)=>{
     
     let p = players.find((x)=>x.name == name)
     

     let exit = mainTeam.find((x)=>x.name == p.name)
     if(exit){
       return alert('Already Added')
     }else{

      if(total >= p.credits){
        let tt = total - p.credits;
        setTotal(tt);
        console.log(mainTeam)
        return mainTeam.push(p);
      }else{
        return alert('You Total credits should be grater than player credits')
      }
       
     }
    
  }

  // remove Item
  let removeHandler = (ee,inn)=>{ 
    let r = mainTeam.find((e)=>e.name == ee.name)

    let tt = total + r.credits
    setTotal(tt)
    for(let i=0; i<mainTeam.length;i++){
      if(mainTeam[i].name == ee.name){
         return mainTeam.splice(i,1)
      }
    }
    
  }
  let prvHandler=()=>{
     setPrv(!prv)
  }

  // exit Handler
  let exitHandler = ()=>{
    setPrv(false)
  }

  let proceedHandler = ()=>{
     setTotal(100)
  }

  // Wk

  let keepers = mainTeam.filter((x)=>x.role == 'wk')
  let bating =mainTeam.filter((y)=>y.role == 'bat')
  let allrounders = mainTeam.filter((z)=>z.role == 'all')
  let bowler = mainTeam.filter((z) => z.role == "bowl");

  let srh =mainTeam.filter((x)=>x.team == 'srh')
  let kol = mainTeam.filter((x) => x.team == "kol");



  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-end ">
        <div className="col-md-4 d-flex align-items-center justify-content-end ">
          <h4 id="points" className="bg-success text-white">
            Total Points -{" "}
            <span className="text-dark bg-white px-3">{total}</span>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-10 col-10 col-sm-10 d-flex align-items-center justify-content-around p-2  c-c">
              <span onClick={keeperHandler}>WK</span>
              <span onClick={batHandler}>BAT</span>
              <span onClick={allHandler}>AR</span>
              <span onClick={bowlerHandler}>BOWL</span>
            </div>
          </div>

          <div className="row  py-2">
            {/* <div className="col-md-12 col-12 col-sm-12 d-flex align-items-center justify-content-around  p-2  c-c-c"> */}
            <div className="col-md-2  col-2 col-sm-2 cre">&nbsp;</div>
            <div className="col-md-2 col-2 col-sm-2 cre">NAME</div>
            <div className="col-md-2 col-2 col-sm-2 cre">POINTS</div>
            <div className="col-md-2 col-2 col-sm-2 cre">CREDITS</div>
            <div className="col-md-2 col-2 col-sm-2 cre">ACTIONS</div>

            {/* </div> */}
          </div>

          {/* Player */}

          {play.map((el, index) =>
            (<div className="row player-r" key={index}>
              <div className="col-md-2  col-2 col-sm-2 cre">
                <span
                  id="team"
                  className={el.team == "srh" ? "bg-danger" : "bg-primary"}
                >
                  {el.team}
                </span>

                <img
                  src={el.image ? el.image : <h4>Loading...</h4>}
                  id="player-img"
                />
              </div>
              <div className="col-md-2 col-2 col-sm-2 cre">
                <h3>{el.name}</h3>
              </div>
              <div className="col-md-2 col-2 col-sm-2 cre">
                <h3>{el.points}</h3>
              </div>
              <div className="col-md-2 col-2 col-sm-2 cre">
                <h3>{el.credits}</h3>
              </div>
              <div className="col-md-2 col-2 col-sm-2 cre">
                {/* <div id="btns"> */}
                <button
                  className={
                    total <= 0 || mainTeam >= 11 
                      ? "btn btn-primary"
                      : "btn btn-outline-success"
                  }
                  // disabled={mainTeam.find((r)=>r.name == el.name ? true : false)}
                  onClick={() => addHandler(el.name)}
                  disabled={total <= 0 || mainTeam.length >= 11 || mainTeam.find((e)=>e.name == el.name) ? true : false}
                >
                  Add
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeHandler(el, index)}
                >
                  remove
                </button>
                {/* </div> */}
              </div>
            </div>)
          )}
        </div>
      </div>

      <div className="row my-3 d-flex align-items-center justify-content-end">
        <div className="col-md-2 col-2 col-sm-2 d-flex align-items-center justify-content-end">
          <button
            className="btn btn-outline-primary w-100 fs-4 my-3"
            onClick={prvHandler}
          >
            Prview
          </button>
        </div>
        {
          mainTeam.length >= 11 ? (<div className="col-md-2 col-2 col-sm-2 d-flex align-items-center justify-content-end">
          
          <Link 
           onClick={proceedHandler}
            to="/main_team"
            className="btn btn-outline-primary w-100 fs-4 my-3"
          >
            Proceed
          </Link> </div>) : ''
        }
     
        
        


      </div>

      {/*  PRV WINDOW */}
      <div className={prv ? "row prv active" : "row prv"} id="prv">
        <div className="col-md-12">
          <div className="row rrr">
            <h3 id="sel" className="my-2">
              <span className="px-5 bg-white my-1">
                SRH -<span>{srh && srh.length}</span>
              </span>
              &nbsp; &nbsp;
              <span className="px-5 bg-white my-1">
                {" "}
                Kol - <span>{kol && kol.length}</span>
              </span>
            </h3>
            <button id="exit-btn" onClick={exitHandler}>
              +
            </button>
          </div>
          <hr />

          <div className="row  d-flex align-items-center justify-content-center">
            <span className="d-block text-center text-white fs-3 my-3">WK</span>
            {keepers &&
              keepers.map((ele, index) => (
                <div className="col-md-3 col-3 col-sm-3 p-3 w-c" key={index}>
                  <img src={ele.image} className="d-block" id="prv-img" />
                  <h3 id="prv-name">{ele.name}</h3>
                </div>
              ))}
          </div>

          <div className="row  d-flex align-items-center justify-content-around">
            <span className="d-block text-center text-white fs-3 my-3">
              BAT
            </span>
            {bating &&
              bating.map((ele, index) => (
                <div className="col-md-3 col-3 col-sm-3 p-3 w-c" key={index}>
                  <img src={ele.image} className="d-block" id="prv-img" />
                  <h3 id="prv-name">{ele.name}</h3>
                </div>
              ))}
          </div>

          <div className="row  d-flex align-items-center justify-content-around">
            <span className="d-block text-center text-white fs-3 my-3">
              ALL-R
            </span>
            {allrounders &&
              allrounders.map((ele, index) => (
                <div className="col-md-3 col-3 col-sm-3 p-3 w-c" key={index}>
                  <img src={ele.image} className="d-block" id="prv-img" />
                  <h3 id="prv-name">{ele.name}</h3>
                </div>
              ))}
          </div>

          <div className="row  d-flex align-items-center justify-content-around">
            <span className="d-block text-center text-white fs-3 my-3">
              BOWLERS
            </span>
            {bowler &&
              bowler.map((ele, index) => (
                <div className="col-md-3 col-3 col-sm-3 p-3 w-c" key={index}>
                  <img src={ele.image} className="d-block" id="prv-img" />
                  <h3 id="prv-name">{ele.name}</h3>
                </div>
              ))}
          </div>

          {/* col-end */}
        </div>
      </div>
    </div>
  );
}

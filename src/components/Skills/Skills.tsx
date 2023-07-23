import React, {useEffect, useState} from "react";

interface Data {
  skill_label:string;
  img:string;
  level:number;
}
interface SkillsProps{
  label:string;
  data: Data [];

}



const Skills: React.FC <SkillsProps> = ({label,data}) =>  {

  const rate = (gold:number) => {
    const rates = [];
    for (let i = 0; i < 5; i++) {
      if(i<gold)
      {
        rates.push(<li className="list-inline-item text-center">
          <div className="d-flex flex-column align-items-center">
            <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                 fill="currentColor" viewBox="0 0 16 16" style={{"color": "rgb(249,254,4)"}}>
              <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </div>
        </li>);
      }else{
        rates.push(<li className="list-inline-item text-center">
          <div className="d-flex flex-column align-items-center">
            <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                 fill="currentColor" viewBox="0 0 16 16" >
              <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </div>
        </li>);

      }

    }


      return rates;
    };



  return(
      <div className="container py-4 py-xl-5" style={{"background": "#272e48"}}>
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{"color": "rgb(255,255,255)"}}>{label}</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-2 row-cols-md-4" style={{"background": "#272e48"}}>
          {data.map((d,k) => (


          <div className="col" style={{"background": "#272e48","borderTopRightRadius": "0px"}} key={k}>
            <div className="card border-0 shadow-none" style={{"background": "#272e48"}}>
              <div className="card-body text-center d-flex flex-column align-items-center p-0"
                   style={{"background": "#1A233A","borderTopRightRadius": "20px","borderTopLeftRadius": "20px","height": "270px"}}><img
                  className="rounded-circle mb-3 fit-cover" width="130" height="130"
                  src={d.img} style={{"marginTop": "13px"}}/>
                <h5 className="fw-bold text-primary card-label mb-0"><strong>{d.skill_label}</strong></h5>

                <ul className="list-inline fs-6 text-muted w-100 mb-0" style={{"marginTop":"30px"}}>
                  {rate(d.level)}
                </ul>
              </div>
            </div>
          </div>
            ))}
        </div>
      </div>

    );

}
export default Skills;
import React from 'react'

export const SoftSkills2 = () => {
  return (
    <div className='row'>
      <h2 className='mb-2' style={{textDecoration: "underline", textUnderlineOffset: "5px"}}>Softskills</h2>
      <ul style={{listStyle: "none",textAlign: "center"}} className="lista_iconos container d-flex justify-content-center flex-wrap">
        <li className="m-2 col-md-4"><h6>Trabajo en equipo</h6>
        <img src="assets/teamwork_skill.png" alt=""  width="60" height="50"  style={{backgroundColor: "antiquewhite", borderRadius: "5px"}}/>
        </li>

        <li className="m-2  col-md-4"><h6 className='mb-4'>Comunicacion</h6>
        <img src="assets/communication_skill.png" alt=""  width="60" height="50" style={{backgroundColor: "antiquewhite", borderRadius: "5px"}}/>
        </li>

        <li className="m-2 col-md-4"><h6>Gestion de tiempo</h6>
        <img src="assets/time_skill.png" alt=""  width="60" height="50"/>
        </li>

        <li className="m-2 col-md-4"><h6>Resolucion de conflictos</h6>
        <img src="assets/problems_skill.png" alt=""  width="60" height="50" style={{backgroundColor: "antiquewhite", borderRadius: "5px"}}/>
        </li>
        
     </ul>
    </div>
  )
}

import React from 'react'


export const Skills = () => {
  return (
    <div className='col-8 skills_div '>
      <h2 className='mb-4 mt-2' style={{textDecoration: "underline", textUnderlineOffset: "5px"}}>Tecnologias</h2>
      <ul style={{listStyle: "none"}} className="lista_iconos container">
        <li className="m-2"><img src="assets/html5.png" alt="html_icon"  width="65" height="55"/></li>
        <li className="m-2"><img src="assets/css.png" alt="css_icon" width="65" height="55"/></li>
        <li className="m-2"><img src="assets/javascript.png" alt="javascript_icon"  width="60" height="55"/></li>
        <li className="m-2"><img src="assets/react.png" alt="react_icon" width="65" height="55"/></li>
        <li className="m-2"><img src="assets/bootstrap.png" alt="bootstrap_icon" width="60" height="55"  /></li>
        <li  className="m-2"><img src="assets/figma.png" alt="figma_icon"  width="65" height="55" /></li>
       
    </ul>
    </div>
  )
}

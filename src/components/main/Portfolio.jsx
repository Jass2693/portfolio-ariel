import React from 'react'

export const Portfolio = () => {
    return (
        <div className='mt-4 row d-flex justify-content-around'>


            <h2 className='mb-4' style={{textDecoration: "underline", textUnderlineOffset: "5px"}}>Portfolio</h2>

            <div className="card col-3 mb-2" style={{ width: "250px", padding: "2px", height: "306px", alignItems: "center" }}>
                <a href="https://3guitar-shop.netlify.app/" target='_blank' rel='noreferrer' style={{color:'azure', textDecoration: "none"}}>

                    <img src="assets/ecommerce.png" className="card-img-top" alt="react" style={{ width: "244px" }} height="140px" />
                    <div className="card-body bg-dark" style={{  textAlign: "center" }}>
                        <h5 className="card-title">E-commerce</h5>
                        <p className="card-text">Realizado con useContext y React Router Dom</p>
                        <div className="text-center">
                            
                            <a href='https://github.com/Jass2693/E-commerce' target="_blank" rel='noreferrer' className='ms-1' style={{ margin: "auto" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="50" color='white' height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </a>
                
            </div>


            <div className="card col-3 mb-3" style={{ width: "250px", padding: "2px", height: "306px", alignItems: "center" }}>
            <a href="https://cuentas-app.netlify.app/" target='_blank' rel='noreferrer' style={{color:'azure', textDecoration: "none"}}>
                <img src="assets/cuentasapp.png" className="card-img-top" alt="react" style={{ width: "244px" }} height="140px" />
                <div className="card-body bg-dark" style={{  textAlign: "center" }}>
                    <h5 className="card-title">Cuentas App</h5>
                    <p className="card-text"> App realizada con react-redux para registrar gastos.</p>
                    <div className="text-center">
                      
                        <a href='https://github.com/Jass2693/cuentas-app' target="_blank" rel='noreferrer' className='ms-1' style={{ margin: "auto" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="50" color='white' height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>

                    </div>
                </div>
                </a>
            </div>


            <div className="card col-3 mb-2" style={{ width: "250px", padding: "2px", height: "306px", alignItems: "center" }}>
                <a href="https://piedra-papel-tijer.netlify.app/" target='_blank' rel='noreferrer' style={{color:'azure', textDecoration: "none"}}>
                <img src="assets/juego.png" className="card-img-top" alt="react" style={{ width: "244px" }} height="140px" />
                <div className="card-body bg-dark" style={{  textAlign: "center" }}>
                    <h5 className="card-title">Piedra Papel o tijera</h5>
                    <p className="card-text">Juego realizado con react del clasico juego</p>
                    <div className="text-center">
                       
                        <a href='https://github.com/Jass2693/Juego-React' target="_blank"rel='noreferrer' className='ms-1' style={{ margin: "auto" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="50" color='white' height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>

                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}

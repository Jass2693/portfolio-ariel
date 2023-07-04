import React from 'react'

export const Form = () => {
    return (
        <div className='mt-3 w-50 col col-xs-12 col-md-6'>
            <h4>Contactame</h4>
            <form action="https://formsubmit.co/arielsotelosartoris@gmail.com"          method="POST">
                <a name="form_contacto"/>
                <input  type="text" style={{ color: "whitesmoke" }} className="form-control bg-dark p-2 xs-col-12 md-col-6 form_footer" id="exampleFormControlInput1" placeholder="Tu Nombre" name='nombre' required />
                <input type="email" style={{ color: "whitesmoke" }} className="form-control bg-dark p-2 xs-col-12 md-col-6 form_footer" id="exampleFormControlInput1" placeholder="name@example.com" name='email' required />

                <textarea placeholder="Escriba su mensaje" style={{ color: "whitesmoke" }} className="form-control bg-dark p-2 xs-col-12 md-col-7 form_footer" id="exampleFormControlTextarea1" rows="4" name='mensaje'></textarea>
                <button type="submit" className='btn btn-outline-primary mt-2' required>Enviar</button>


            </form>
        </div>
    )
}

import React from 'react';
import '../App.css';
const ContactForm = () => {
//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }
  return (
    <div className="container">
    <h1 className='frm-con'>BOOK YOUR TABLE</h1>
      {/* <h2 className="mb-3">BOOK YOUR TABLE</h2> */}
      {/* <form onSubmit={onSubmit}> */}
      <form className='frm-str'>
{/*  */}


        <div className="mb-1 w-50">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>


        <div className="mb-3 w-50">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>


        <div className="mb-3 w-50">
          <label className="form-label" htmlFor="date">
            Date
          </label>
          <input className="form-control" type="date" id="date" required />
        </div>


        <div className="mb-3 w-50">
          <label className="form-label" htmlFor="time">
            Time
          </label>
          <input className="form-control" type="time" id="time" required />
        </div>


        <div className="mb-3 w-50">
          <label className="form-label" htmlFor="people">
            People
          </label>
          <textarea className="form-control" id="people" required />
        </div>


        {/* <button className="btn btn-danger" type="submit">
          {formStatus}
        </button> */}
        <button className="btn btn-danger" type="submit">
         FIND A TABLE
        </button>
      </form>
    </div>
  )
}
export default ContactForm
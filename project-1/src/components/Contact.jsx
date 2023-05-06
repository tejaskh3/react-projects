import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>
          Contact Us
        </h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name'/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email'/>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input type="text" placeholder='Enter Your Query...'/>
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

'use client';

import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import Map from "./Map";



const ContactMail = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        ref.current,
        "public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="contactMail">
      <div className="contactContainer">
        <div className="left">
          <form className="form" ref={ref} onSubmit={handleSubmit}>
            <h1 className='title'>Contact us</h1>
            <input placeholder="Name" className="input" name="name" />
            <input className="input" placeholder="Email" name="email" />
                      <textarea 
                        className="textarea" placeholder="Write your message"              name="message"
              rows={10}
            />
            <button type="submit" className="button">Send</button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
        <div className="right">
         <Map/>
        </div>
      </div>
    </div>
  );
};

export default ContactMail;

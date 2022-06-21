
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_jiqw76s', 'template_3gw9qwh', form.current, 'FpPoHET4ekC_pCjO5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

      <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mr.tringuyen1225@gmail.com</h5>
          
          <a href="mailto:mr.tringuyen1225@gmail.com">Send an email</a>
         
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary' id='send-message'> Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact

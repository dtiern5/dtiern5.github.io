import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

function submit(user_name, email, message) {
    if(user_name && email && message) {
        const serviceId = 'contact_service'
        const templateId = 'contact_form'
        const userId = 'user_czNfuZt5JFnMrKjj4p3ty'
        const templateParams = {
            user_name,
            email,
            message
        }

        return emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log("Success!", response.status, response.text))
            .then(error => console.log("Failed...", error))
    }

    return alert('Please fill in all of the fields')
}

function Contact() {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const alertRef = useRef()

    return (
        <section className='contact' id='contact'>
                <form onSubmit={(e) => {
                    submit(nameRef.current.value, emailRef.current.value, messageRef.current.value)
                    nameRef.current.value = ''
                    emailRef.current.value = ''
                    messageRef.current.value = ''
                    alertRef.current.style.opacity = '1';
                    alertRef.current.style.transform = 'translateY(-105%)'
                }} className='contact-form'>
                    <p ref={alertRef} className="contact-alert">Your message has been sent, thanks!</p>
                    <h2 className='contact-header'>Contact Me</h2>
                    <input ref={nameRef} type='text' required placeholder='Your Name' />
                    <input ref={emailRef} type='text' required placeholder='Your Email' />
                    <textarea ref={messageRef} required placeholder="Your Message" />
                    <button className="contact-btn" type="submit" style={{ fontFamily: "Roboto" }}>Send</button>
                </form>
        </section>
    )
}

export default Contact
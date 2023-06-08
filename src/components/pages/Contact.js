import React, { useState } from 'react';


//Sets form to be blank states as the contact section is selected from nav bar 
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // A simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  // event handlers for name, email and message changes 
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // handles blur for the inputed field to make sure that the name and email inputs are not left blank when the user clicks out of the field
  const handleBlur = (field) => {
    if (field === 'name') {
      if (!name) {
        setNameError('Name is required');
      } else {
        setNameError('');
      }
    } else if (field === 'email') {
      if (!email) {
        setEmailError('Email is required');
      } else if (!validateEmail(email)) {
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
      }
    }
  };

  // logic to handle submitting the form 
  const handleSubmit = (e) => {
    e.preventDefault();

    handleBlur('name');
    handleBlur('email');

  };


  // what ContactForm function actually returns. Which is a form with a name, email and message field with a submit button at the end 
  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={handleNameChange}
    //       onBlur={() => handleBlur('name')}
    //     />
    //     {nameError && <div className="error">{nameError}</div>}
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="text"
    //       id="email"
    //       value={email}
    //       onChange={handleEmailChange}
    //       onBlur={() => handleBlur('email')}
    //     />
    //     {emailError && <div className="error">{emailError}</div>}
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message:</label>
    //     <textarea
    //       id="message"
    //       value={message}
    //       onChange={handleMessageChange}
    //     ></textarea>
    //   </div>
    //   <br />
    //   <button type="submit">Submit</button>

    // </form>
    <div> 
      
    </div>
  );
};


// returns main body for the Contact function to export it and be used withing PortfolioContainer when on the #contact page
export default function Contact() {
  return (
    <main>
      <h1>Contact Me</h1>
      <ContactForm />
      <br />
    </main>

  );
};


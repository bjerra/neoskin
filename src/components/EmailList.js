import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const EmailListForm = () => {

  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
          console.log(data.result);
          setResult(data.result)     
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  
  return (

    <form onSubmit={handleSubmit} id="email-list">
      <h2>Anmäl dig till vårt nyhetsbrev och var först med att ta del av våra härliga erbjudanden!</h2>
      <div>
          <input
              className="input"
              placeholder="Din e-post"
              name="email"
              type="text"
              onChange={handleEmailChange
              }
            />   

          <button className="button is-link" type="submit">Skicka</button>

      </div>
    
      {result === "success" && <p className="success">Tack!</p>} 
      {result === "error" && <p className="error">Nånting gick fel</p> }
   
    </form>
  );
};

export default EmailListForm;
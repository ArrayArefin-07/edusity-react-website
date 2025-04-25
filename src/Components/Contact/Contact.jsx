import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback, question, and suggestion are important to us as we strive to provide exceptional services to our university community.
        </p>
        <ul>
          <li>Contact@DevArefin.dev</li>
          <li>+8801234567893</li>
          <li>Main Road, Bashundhara R/A <br/> Vatara, Dhaka </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;

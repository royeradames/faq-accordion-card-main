import React from 'react';
import './App.css';
import womenOnline from "./images/illustration-woman-online-mobile.svg"
import mobilePattern from "./images/bg-pattern-mobile.svg"
function App() {
  return (
    <div className="faq">
      <div className="illustration">
        <img className ="illustration__women" src={womenOnline} alt="illustration of a woman using the computer"/>
        <img className ="illustration__pattern" src={mobilePattern} alt="pattern"/>
      </div>
      <h1 className="faq__title">FAQ</h1>
      <ul>
        <li>
          <h2 className="faq__question">How many team members can I invite?</h2>
          <p className="faq__answer faq__answer_hidden">
            You can invite up to 2 additional users on the Free plan. There is no limit on
            team members for the Premium plan.
          </p>
        </li>
        <li>
          <h2 className="faq__question">What is the maximum file upload size?</h2>
          <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
        </li>
        <li>
          <h2 className="faq__question">How do I reset my password?</h2>
          <p className="faq__answer faq__answer_hidden">
            Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.
          </p>
        </li>
        <li>
          <h2 className="faq__question">Can I cancel my subscription?</h2>
          <p className="faq__answer faq__answer_hidden">Yes! Send us a message and we’ll process your request no questions asked.</p>
        </li>
        <li>
          <h2 className="faq__question">Do you provide additional support?</h2>
          <p className="faq__answer faq__answer_hidden">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
        </li>
      </ul>
      
      {/* <div style={{
        fontSize: "11px", 
        textAlign: "center",
      }}>
        Challenge by <a style={{
          color: "hsl(228, 45%, 44%)",
        }} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/royeradames">Royer Adames</a>.
      </div> */}
    </div>
  );
}

export default App;

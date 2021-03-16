import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      How many team members can I invite?
      You can invite up to 2 additional users on the Free plan. There is no limit on 
      team members for the Premium plan.

      What is the maximum file upload size?
      No more than 2GB. All files in your account must fit your allotted storage space.

      How do I reset my password?
      Click “Forgot password” from the login page or “Change password” from your profile page.
      A reset link will be emailed to you.

      Can I cancel my subscription?
      Yes! Send us a message and we’ll process your request no questions asked.

      Do you provide additional support?
      Chat and email support is available 24/7. Phone lines are open during normal business hours.

      <div style={{
        fontSize: "11px", 
        textAlign: "center",
      }}>
        Challenge by <a style={{
          color: "hsl(228, 45%, 44%)",
        }} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/royeradames">Royer Adames</a>.
      </div>
    </div>
  );
}

export default App;

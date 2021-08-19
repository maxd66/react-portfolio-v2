import React, { useState } from "react";

function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  let mailLink = `mailto:max.dunn63@gmail.com?subject=${userName} - ${userEmail}&body=${userMessage}`;

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "userEmail") {
      setUserEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  return (
    <form name="EmailForm" id="emailForm">
      <div className="stacked">
        <label for="userName">Name:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={handleInputChange}
        />
      </div>
      <div className="stacked">
        <label for="userEmail">Email:</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          onChange={handleInputChange}
        />
      </div>
      <div className="stacked">
        <label for="userMessage">Message:</label>
        <textarea
          name="userMessage"
          id="userMessage"
          rows="6"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <a href={mailLink} id="mailLink">
        Send
      </a>
    </form>
  );
}

export default Contact;

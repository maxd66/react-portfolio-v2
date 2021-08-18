function Contact() {
  return (
    <form
      action="mailto:max.dunn63@gmail.com"
      method="POST"
      encType="multipart/form-data"
      name="EmailForm"
    >
      <label for="userName">Name:</label>
      <input type="text" name="userName" id="userName" />
      <label for="userEmail">Email:</label>
      <input type="email" name="userEmail" id="userEmail" />
      <label for="userMessage">Message:</label>
      <textarea name="userMessage" id="userMessage" rows="6"></textarea>
      <button type="submit" value="Submit">
        Send
      </button>
    </form>
  );
}

export default Contact;

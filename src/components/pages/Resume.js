function Resume() {
  return (
    <div>
      <h2>
        <a
          href={process.env.PUBLIC_URL + "/resume-2021-07-22.pdf"}
          download
          className="resumeLink"
        >
          Download My Full Resume
        </a>
      </h2>
      <h3 className="resumeTitle">Front End Proficiencies:</h3>
      <ul className="resumeList">
        <li>HTML/CSS</li>
        <li>React</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>AJAX</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
      </ul>
      <h3 className="resumeTitle">Back End Proficiencies:</h3>
      <ul className="resumeList">
        <li>Node</li>
        <li>MySql/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>Express</li>
        <li>Graphql/Apollo</li>
        <li>Efficient Data Storage and Retrieval</li>
      </ul>
    </div>
  );
}

export default Resume;

import avatar from "../../images/avatar.png";

function Home() {
  return (
    <div>
      <h2 className="aboutHeader">About Me</h2>
      <p className="aboutText">
        <span>
          <img className="avatarImg" src={avatar} alt="avatar of myself"></img>
        </span>
      </p>
      <p className="aboutText">
        Lorem Ipsum dolor this is not autocompleting anymore so I am just
        putting random text to take up as much space as possible. My typing
        definitely needs some improvement and I could really use some assistance
        in this area of my life.
      </p>
    </div>
  );
}

export default Home;

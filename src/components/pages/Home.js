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
        Hey there! My name is Maxwell Dunn and I am a Full Stack Web Developer.
        For as long as I can remember, I have loved learning something new.
        Whether it be yoyoing, drawing, card magic, building computers, playing
        football, or becoming a neuroscientist, if I wanted it, I made it
        happen. And like many others, I also had a love for software and
        technology. The amalgamation of creativity, math, critical thinking, and
        effort excited me, but I recently found out that it wasn’t a pipe dream
        and it wasn’t impossible to make that love for programming into a
        successful and respectable career. I won’t bore you with my life story,
        and explain how we got here today. All that matters now is that my name
        is Maxwell Dunn, and I am a programmer. With my skills, work ethic,
        drive, and desire to learn, what I accomplish next is simply a matter of
        decision.
      </p>
    </div>
  );
}

export default Home;

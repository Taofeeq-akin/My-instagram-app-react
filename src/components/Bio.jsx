import profileIcon from "../assests/profileIcon.svg";

const Bio = () => {
  return (
    <section className="bio">
      <div
        className="profile-photo"
        role="button"
        title="Click here to edit photo"
      >
        <img src={profileIcon} alt="profile image" />
      </div>
      <div className="profile-info">
        <p className="name">Taofeeq Akin</p>
        <p className="about">Building web using react</p>
      </div>
    </section>
  );
};

export default Bio;

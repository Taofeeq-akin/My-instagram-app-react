import profileIcon from "../assests/profileIcon.svg";

const Bio = () => {
  const editForm = (
    <form className="edit-bio-form">
      <input type="text" id="" placeholder="Your name" />
      <input type="text" id="" placeholder="About you" />
      <br />
      <button className="cancel-button" type="button">
        Cancel
      </button>
      <button type="button">Save</button>
    </form>
  );

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
        <button className="edit" type="button">
          Edit
        </button>
        {editForm}
      </div>
    </section>
  );
};

export default Bio;

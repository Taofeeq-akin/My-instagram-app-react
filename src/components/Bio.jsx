import { useState } from "react";
import getPhotoUrl from "get-photo-url";
import profileIcon from "../assests/profileIcon.svg";

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Taofeeq Akin",
    about: "Building web using react",
  });

  const updateUserDetails = (e) => {
    e.preventDefault();
    setUserDetails({
      name: (e.target.nameOfUser.value = !""),
      about: (e.target.aboutUser.value = !""),
    });

    setEditFormOpen(false);
  };

  const updateProfile = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    setProfilePhoto(newProfilePhoto);
  };

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" placeholder="Your name" />
      <input type="text" id="" name="aboutUser" placeholder="About you" />
      <br />
      <button
        className="cancel-button"
        type="button"
        onClick={() => setEditFormOpen(false)}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  const editButton = (
    <button
      className="edit"
      type="button"
      on
      onClick={() => setEditFormOpen(true)}
    >
      Edit
    </button>
  );

  return (
    <section className="bio">
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfile}>
        <div
          className="profile-photo"
          role="button"
          title="Click here to edit photo"
        >
          <img src={profilePhoto} alt="profile image" />
        </div>
      </label>
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editFormOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;

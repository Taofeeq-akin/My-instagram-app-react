import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import getPhotoUrl from "get-photo-url";
import profileIcon from "../assests/profileIcon.svg";
import { db } from "../dexie";

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Taofeeq Akin",
    about: "Building web using react",
  });

  // Getting userDetails from bioDB
  useEffect(() => {
    const setDataFromDB = async () => {
      const userDetailsFromDB = await db.bio.get("info");
      const profilePhotoFromDB = await db.bio.get("profilePhoto");
      userDetailsFromDB && setUserDetails(userDetailsFromDB);
      profilePhotoFromDB && setProfilePhoto(profilePhotoFromDB);
    };

    setDataFromDB();
  }, []);

  const updateUserDetails = async (e) => {
    e.preventDefault();
    const objectData = {
      name: e.target.nameOfUser.value,
      about: e.target.aboutUser.value,
    };

    setUserDetails(objectData);

    // Update bio object store
    // Will also await it cus indexDB is asynchronous
    await db.bio.put(objectData, "info");

    setEditFormOpen(false);
  };

  const updateProfile = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    setProfilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, "profilePhoto");
  };

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input
        type="text"
        id=""
        name="nameOfUser"
        defaultValue={userDetails?.name}
        placeholder="Your name"
      />
      <input
        type="text"
        id=""
        name="aboutUser"
        defaultValue={userDetails?.about}
        placeholder="About you"
      />
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

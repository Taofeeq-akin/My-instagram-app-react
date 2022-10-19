import getPhotoUrl from "get-photo-url";
import { useState } from "react";

const Gallery = () => {
  const [allPhoto, setAllPoto] = useState([]);

  const addPhoto = async () => {
    const newPhoto = {
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    };
    setAllPoto([newPhoto, ...allPhoto]);
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <p className="add-photo-button">gg</p>
        {/* <i className="add-photo-button fas fa-plus-square"></i> */}
      </label>
      <section className="gallery">
        {allPhoto.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} alt="" className="item-image" />
            <button className="delete-button">Delete</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;

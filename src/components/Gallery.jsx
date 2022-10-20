import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexie";
import icons from "../assests/icons.svg#icon-loader";

const Gallery = () => {
  const allPhoto = useLiveQuery(() => db.gallery.toArray(), []);

  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };

  const deletePhoto = (id) => {
    db.gallery.delete(id);
  };

  const spinner = (
    <>
      <div className="spinner"></div>
      <div className="spin"></div>
    </>
  );

  console.log(icons);

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        {/* <p className="add-photo-button">gg</p> */}
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>
      <section className="gallery">
        {/* {!allPhoto && <p>Loading...</p>} */}
        {!allPhoto && spinner}
        {allPhoto?.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} alt="" className="item-image" />
            <button
              className="delete-button"
              onClick={() => deletePhoto(photo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;

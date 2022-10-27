import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexie";

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

  const deleteAllPhoto = () => {
    db.gallery.clear();
  };

  const spinner = (
    <>
      <div className="spinner"></div>
      <div className="spin"></div>
    </>
  );

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        {/* <p className="add-photo-button">+</p> */}
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      {allPhoto?.length > 1 && (
        <button className="delete-all-button" onClick={deleteAllPhoto}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
      )}

      <section className="gallery">
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

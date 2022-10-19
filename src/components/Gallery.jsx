import pexel2 from "../assests/pexels2.jpeg";
import pexel3 from "../assests/pexels3.jpeg";

const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <p className="add-photo-button">gg</p>
        {/* <i className="add-photo-button fas fa-plus-square"></i> */}
      </label>
      <section className="gallery">
        <div className="item">
          <img src={pexel2} alt="" className="item-image" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={pexel3} alt="" className="item-image" />
          <button className="delete-button">Delete</button>
        </div>
      </section>
    </>
  );
};

export default Gallery;

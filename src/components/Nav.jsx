import instaLogo from "../assests/instaLogo.png";

const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instaLogo} alt="logo" />
      </button>
      <input type="text" placeholder="search" className="search" />
      <span className="nav-links">
        <button>
          <i className="fas fa-home"></i>
        </button>
        <button>
          <i className="fas fa-comment-alt" />
        </button>
        <button>
          <i className="fas fa-compass" />
        </button>
        <button>
          <i className="fas fa-heart" />
        </button>
      </span>
    </nav>
  );
};

export default Nav;

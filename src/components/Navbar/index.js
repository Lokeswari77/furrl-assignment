import { useEffect } from "react";
import "./index.css";

const Navbar = () => {
  const homeBtn = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("nav");
      let scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });

    return window.removeEventListener("scroll", () => {});
  });

  return (
    <nav className="nav-bar" id="nav">
      <img
        onClick={homeBtn}
        className="company-logo"
        src="https://web.furrl.in/_next/static/media/Furrl.13550a62.svg"
        alt="Furrl"
      />
      <div className="nav-icons-container">
        <a className="nav-bar-icons" href="https://furrl.in/wishlist">
          <img src="https://web.furrl.in/_next/static/media/Whislist.2ac94d87.svg" alt="wishlist" />
        </a>
        <a className="nav-bar-icons" href="https://furrl.in/cart">
          <img src="https://web.furrl.in/_next/static/media/Bag.b94fa005.svg" alt="cart" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


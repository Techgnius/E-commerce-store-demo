import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTopButton.css";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    let heightToHidden = 300;
    const pageScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (pageScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {isVisible && (
        <button className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn-icon" />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;

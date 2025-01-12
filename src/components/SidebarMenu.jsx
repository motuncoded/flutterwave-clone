import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SidebarMobile from "./SidebarMobile";

// sidebar menu for the sidebar
const SidebarMenu = ({ isOpen, onOpen, onClose }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        style={
          (windowWidth < 768 && { display: "block" }) ||
          ((windowWidth > 768 && windowWidth < 900
            ? { display: "block" }
            : {}) &&
            (windowWidth > 900 ? { display: "none" } : {}))
        }
      >
        <button onClick={onOpen} aria-label="Open menu" className="text-xl">
          <AiOutlineMenu size="24" />
        </button>
        <SidebarMobile isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

SidebarMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default SidebarMenu;

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const offset = -110;
  return (
    <nav className="fixed top-0 left-0 right-0 mb-20 z-10 flex items-center justify-between py-2 bg-neutral-950 bg-opacity-15 backdrop-blur">
      <div className="hidden md:flex flex-shrink-0 items-center gap-4 mx-auto">
        <Link to="hero" smooth={true} duration={800} offset={offset} className="nav-link cursor-pointer text-center text-2xl">Home</Link>
        <Link to="about" smooth={true} duration={800} offset={offset} className="nav-link cursor-pointer text-center text-2xl">About Me</Link>
        <Link to="skills" smooth={true} duration={800} offset={offset} className="nav-link cursor-pointer text-center text-2xl">Skills</Link>
        <Link to="projects" smooth={true} duration={800} offset={offset} className="nav-link cursor-pointer text-center text-2xl">Projects</Link>
        <Link to="contact" smooth={true} duration={800} offset={offset} className="nav-link cursor-pointer text-center text-2xl">Contact Me</Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/navnihal-satpute"><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/navnihalsatpute"><FaGithub /></a>
        <a target="_blank" href="https://www.instagram.com/navnihal57?igsh=azMwczl5ZGhzanN3"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar
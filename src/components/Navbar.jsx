function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          Lukshan Sadeepa
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
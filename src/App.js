import React from "react"; import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1>MY Portfolio</h1>
        <div className="n1">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Name Section */}
      <section className="pname">
        <h2>Hi, I'm Frontend Dev 👋</h2>
        <p>A Frontend Developer who loves building with React</p>
        <div className="pnamebut">
          <a href="#projects" className="btn1">View Projects</a>
          <a href="#contact" className="btn2">Contact Me</a>
        </div>
      </section>





      {/* About Section */}
      <section id="about" className="section">
        <h3>About Me</h3>
        <p>I'm a passionate frontend developer skilled in HTML, CSS, JavaScript, and React. I enjoy making clean and responsive web interfaces.</p>
        <h4>Skills:</h4>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h3>Projects</h3>
        <div className="project">
          <div className="pd1">
            <h4>E-Commerce Website </h4>
            <p>Developed a fully functional e-commerce website .</p>
            <a href="https://wanda11vision.github.io/gwens">Live Demo</a> | <a href="https://github.com/wanda11vision/gwens">GitHub</a>
          </div>
          <div className="pd1">
            <h4>A showcase website</h4>
            <p>Created a website to showcase my skills and projects.</p>
            <a href="  https://wanda11vision.github.io/stylox">Live Demo</a> | <a href="https://github.com/wanda11vision/stylox">GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h3>Contact</h3>
        <p>Email: yourmail@example.com</p>
        <p>Mobile: +91 1234567890</p>
        <p>GitHub:  https://github.com/wanda11vision</p>
      </section>




      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MY Portfolio | Built with React</p>
      </footer>
    </div>

  );
}

export default App;
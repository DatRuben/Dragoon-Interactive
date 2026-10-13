import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#home">DRAGOON INTERACTIVE</a>

          <div>
            <a href="#projects">PROJECTS</a>
            <a href="#team">TEAM</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <p>01 / HOME</p>

          <h1>Dragoon Interactive</h1>

          <p>
            Software, games, and interactive experiences.
          </p>
        </section>

        <section id="projects">
          <p>02 / SELECTED WORK</p>

          <h2>Projects</h2>

          <article>
            <h3>StoryGame</h3>
            <p>Unity / C#</p>
          </article>

          <article>
            <h3>Dat's: Better Kanban</h3>
            <p>React / TypeScript</p>
          </article>
        </section>

        <section id="team">
          <p>03 / TEAM</p>

          <h2>Team</h2>

          <article>
            <h3>Ruben Becerril</h3>
            <p>Software Development</p>
          </article>

          <article>
            <h3>Samantha Matthews</h3>
            <p>Art / Animation / Development</p>
          </article>
        </section>

        <section id="about">
          <p>04 / ABOUT</p>

          <h2>About Dragoon Interactive</h2>
        </section>

        <section id="contact">
          <p>05 / CONTACT</p>

          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App
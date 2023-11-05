import santaSolange from "./assets/santa.png";
import "./App.css";

function App() {
  return (
    <div className="card">
      <div>
        <a href="https://github.com/skouchy" target="_blank" rel="noreferrer">
          <img src={santaSolange} className="avatar" alt="React logo" />
        </a>
      </div>
      <main className="body">
        <div className="heading">
          <h1 className="myName">Solange Maya</h1>
          <h2 className="role">funemployed</h2>
          <h3 className="website">github.com/skouchy</h3>
        </div>
        <div className="gritty-content">
          <div className="buttons">
            <button className="btn btn-primary">
              <i className="bi bi-envelope-fill" />
              Email
            </button>
            <button className="btn btn-secondary">
              <i className="bi bi-linkedin" />
              LinkedIn
            </button>
          </div>
          <h3 className="small-head">About Me</h3>
          <p>
            Here is some stuff under about me that has nothing to do with me at
            all, just exclusive to whats happening here. goes to show, the title
            doesnt tell the whole story, now does it?
          </p>
          <h3 className="small-head">Interests</h3>
        </div>
      </main>
      <footer className="footer">
        Click on the Vite and React logos to learn more
      </footer>
    </div>
  );
}

export default App;

import "../App.css";

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <nav className="sidebar-menu">
        <div className="sidebar-header">
          <h2 className="sidebar-brand">To-Do App</h2>
        </div>
        <div className="views">
          <span className="views-label">Views</span>
          <div className="view-item">
            <a className="nav-link active" href="#">
              Inbox
            </a>
            <a className="nav-link" href="#">
              Today
            </a>
            <a className="nav-link" href="#">
              Upcoming
            </a>
            <a className="nav-link" href="#">
              Completed
            </a>
          </div>
        </div>
        <div className="projects">
          <span className="projects-label">Projects</span>
          <div className="project-item">
            <a className="nav-link" href="#">
              Design System
            </a>
            <span className="project-count">0</span>
          </div>
          <div className="project-item">
            <a className="nav-link" href="#">
              Executive Ops
            </a>
            <span className="project-count">3</span>
          </div>
          <div className="project-item">
            <a className="nav-link" href="#">
              Core Platform
            </a>
            <span className="project-count">5</span>
          </div>
          <div className="project-item">
            <a className="nav-link" href="#">
              Personal Growth
            </a>
            <span className="project-count">7</span>
          </div>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="footer-content">
          <div className="velocity">
            <span className="velocity-label">Daily velocity</span>
            <span className="velocity-per">0%</span>
          </div>

          <div className="progress-con" id="progressCon">
            <div id="progressBar"></div>
            </div>

          <div className="footer-text">
            <span className="total-tasks">0</span> of{" "}
            <span className="completed-tasks">0 </span>tasks completed
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

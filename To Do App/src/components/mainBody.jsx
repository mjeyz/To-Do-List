import { useState } from "react";
import AddTask from "./addTask";

function MainBody() {
    const [today] = useState(() => new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date()));

    return (
        <main className="main-content">
            <header className="page-header">
                <div>
                    <p className="date-text">{today}</p>
                    <h1 className="view-text">Inbox</h1>
                </div>
                <div className="header-total">
                    <span className="header-total-label">Total tasks</span>
                    <strong>5</strong>
                </div>
            </header>

            <section className="summary-grid" aria-label="Task summary">
                <div className="summary-card">
                    <span className="summary-label">Open tasks</span>
                    <strong>5</strong>
                    <span className="summary-note">Across all projects</span>
                </div>
                <div className="summary-card">
                    <span className="summary-label">Due today</span>
                    <strong>2</strong>
                    <span className="summary-note">Keep momentum going</span>
                </div>
                <div className="summary-card">
                    <span className="summary-label">Completed</span>
                    <strong>0%</strong>
                    <span className="summary-note">Daily velocity</span>
                </div>
            </section>

            <AddTask />

            <section className="task-section">
                <div className="section-heading">
                    <div>
                        <h2>Today</h2>
                        <p>Your priorities for the day</p>
                    </div>
                    <span className="task-count">2 tasks</span>
                </div>
                <div className="task-list">
                    <article className="task-card">
                        <button className="task-check" type="button" aria-label="Complete review project brief" />
                        <div className="task-content">
                            <h3>Review project brief</h3>
                            <p>Make final notes before the design review</p>
                            <div className="task-meta">
                                <span className="task-tag design-tag">Design System</span>
                                <span className="task-due">Due today</span>
                            </div>
                        </div>
                        <span className="priority-dot medium-dot" aria-label="Medium priority" />
                    </article>
                    <article className="task-card">
                        <button className="task-check" type="button" aria-label="Complete plan weekly sprint" />
                        <div className="task-content">
                            <h3>Plan weekly sprint</h3>
                            <p>Set outcomes and assign the next milestones</p>
                            <div className="task-meta">
                                <span className="task-tag ops-tag">Executive Ops</span>
                                <span className="task-due">Due tomorrow</span>
                            </div>
                        </div>
                        <span className="priority-dot high-dot" aria-label="High priority" />
                    </article>
                </div>
            </section>
        </main>
    )
}

export default MainBody;
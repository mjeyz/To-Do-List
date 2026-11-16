function AddTask() {
    return (
        
        <div className="add-task-container">
            <div className="add-task-header">
            <form onSubmit={(event) => event.preventDefault()}>
                <input type="text" placeholder="Add a new objective... (e.g., Finalize Q4 architecture roadmap)" className="task-input" />
                <div className="task-details">
                    <div className="priority-buttons">
                        <button type="button" className="priority-button low">Low</button>
                        <button type="button" className="priority-button medium">Medium</button>
                        <button type="button" className="priority-button high">High</button>
                    </div>
                    <select className="project-designation" defaultValue="">
                        <option value="" disabled>Select a project</option>
                        <option value="Design System">Design System</option>
                        <option value="Executive Ops">Executive Ops</option>
                        <option value="Core Platform">Core Platform</option>
                        <option value="Personal Growth">Personal Growth</option>
                    </select>
                    <input type="date" className="due-date" />
                </div>
                <button type="submit" className="add-task-button">Add Task</button>
            </form>
            </div>
        </div>
    )
}

export default AddTask;
function Navbar() {
    return (
        <nav className="navbar">
            <input type="text" className="search-input" placeholder="Search..." />
            <select className="filter-priority">
                <option value="">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select className="sort">
                <option value="Sort">ALL</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </nav>
    )
}

export default Navbar;
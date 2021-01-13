function LoggedInUser() {
    let users = localStorage.getItem("users"), user;
    if (users) {
        users = JSON.parse(users);
    }
    user = users.find(u => u.email === sessionStorage.getItem("email"));
    return (
        <div className="navbar-end">
        <div className="navbar-item">
            Welcome {user.firstName}
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">

                </a>
                <div className="navbar-dropdown">
                    <a onClick={signOutUser} className="navbar-item">
                        Sign out
                        </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoggedInUser 
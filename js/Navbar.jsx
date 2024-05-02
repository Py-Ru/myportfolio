function Navbar() {
    // tracking the state of the menu
    const [isOpen, setIsOpen] = React.useState(false);

    // function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav className="w-100 h-[70px] flex justify-between">
                <img src="assets/images/pyru-logo.png" alt="logo" className="w-[80px]" />
                <img onClick={toggleMenu} src="assets/images/burger-menu-svgrepo-com.svg" alt="" id="hamburger" className={`w-[47px] h-[47px] mr-2 mt-2 ${isOpen ? 'ham-active' : ''}`} />
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
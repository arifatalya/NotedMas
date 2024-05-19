import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between px-4 py-4 bg-white/50
            backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="font-serif navbar-container flex items-end">
                <Link to="/" className="text-black text-lg font-bold pr-4">Notes Keren</Link>
                <div className="text-black text-lg font-bold pr-4">
                    |
                </div>
                <div className="navbar-links space-x-4 justify-end">
                    <Link to="/note" className="font-serif hover:font-extrabold navbar-link text-black">Notes</Link>
                    <a href="https://github.com/arifatalya" target="_blank" rel="noopener noreferrer"
                       className="font-serif hover:font-extrabold navbar-link text-black">Github🔗</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="navbar">
      <button className="toggle" onClick={() => setMenuToggle((prev) => !prev)}>
        {menuToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <ul className={`menu-nav ${menuToggle ? 'show-menu' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          <Link to="/about/contact">Contact</Link>
        </li>
        <li>
          <Link href="">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

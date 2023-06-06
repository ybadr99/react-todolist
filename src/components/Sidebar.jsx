import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="navbar">
      <button className="toggle" onClick={() => setMenuToggle((prev) => !prev)}>
        {menuToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <ul className={`menu-nav ${menuToggle ? 'show-menu' : ''}`}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

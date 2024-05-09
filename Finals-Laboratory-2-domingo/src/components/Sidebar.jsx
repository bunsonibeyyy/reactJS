import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const activeClass = 'rounded-md bg-gray-800 text-white p-2';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
        ]);
        
        return (
            <ul>
            {[...sideBarArray].map(([key, value]) => (
              <li key={value} className="mb-2">
                <NavLink
                  exact="true"
                  to={value}
                  className={`text-gray-300 ${location.pathname === value? activeClass : ''}`}
                >
                  {key}
                </NavLink>
              </li>
            ))}
          </ul>
        );
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div className="flex">
        {/* Sidebar Icon Button */}
        <button onClick={toggleSidebar} className="bg-gray-800 text-white p-2 rounded-md">
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Conditional Rendering based on the sidebar's visibility state */}
        {isOpen && (
          <aside className="bg-gray-800 w-64 px-4 py-8">
            {NavLinkFunction()}
          </aside>
        )}
      </div>
    );
}

export default Sidebar;

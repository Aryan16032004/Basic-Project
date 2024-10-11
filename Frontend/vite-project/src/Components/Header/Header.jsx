import React, { useState, useEffect } from 'react';
import { Container, LogoutBtn } from '../index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from '../../BackendApi/auth.js';

function Header() {
  const [currentUser, setCurrentUser] = useState(null); // State to hold user data
  const authStatus = useSelector((state) => state.auth.status); // Check authentication status
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const navItems = [
    
    { name: 'Courses', slug: "/dashboard", active: true },
    { name: "Login", slug: "/", active: !authStatus },
  ];

  // Fetch user data when the component mounts or when authStatus changes
  useEffect(() => {
    const fetchUser = async () => {
      if (authStatus) {
        try {
          const userData = await authService.getCurrentUser();
          setCurrentUser(userData.data); // Set user data in state
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUser();
  }, [authStatus]); // Dependency on authStatus so it refetches when auth changes

  return (
    <header className='py-3 shadow-md bg-blue-200'>
      <Container>
        <nav className='flex items-center'>
          {/* Left side: Display username if logged in */}
          {authStatus && currentUser && (
            <div className='mr-auto text-lg font-semibold text-gray-700'>
              Hello, {currentUser.username}
            </div>
          )}

          {/* Navigation Menu */}
          <ul className='flex space-x-6 ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`px-4 font-semibold py-2 text-gray-700 duration-200 rounded-md 
                      ${location.pathname === item.slug ? 'bg-blue-400 text-white' : 'hover:bg-blue-400 hover:text-white'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

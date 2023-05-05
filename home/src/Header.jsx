import React from 'react';

function Header() {
  return (
    <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', backgroundColor: 'blue', color: 'white', padding: '1rem', fontSize: '1.5rem' }}>
      <h1 style={{ fontSize: '1.5rem' }}>My Website</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: '1rem' }}>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white' }}>Home</a></li>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white' }}>About</a></li>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
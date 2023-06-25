import React from 'react';
import Transparency from '../Transparency.svg';
import Epic from '../awesome.png';

function Header() {
  return (
    <header className="header">
      <img src={Epic} alt="Logo ting" className="real-logo" width={100} />
      <img src={Transparency} alt="React Logo" className="logo" width={200} />
    </header>
  );
}

export default Header;

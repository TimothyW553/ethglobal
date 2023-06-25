import React from 'react';
import Transparency from '../Transparency.svg';
import Epic from '../awesome.png';

function Header() {
  // render() {
  return (
    <header className="header">
      <img src={Epic} alt="Logo ting" className="real-logo" width={100} />
      <img src={Transparency} alt="React Logo" className="logo" width={200} />
      {/* <button type="button">Verify ID</button> */}
    </header>
  );
  // }
}

export default Header;

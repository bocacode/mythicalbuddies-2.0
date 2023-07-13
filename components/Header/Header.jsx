import './Header.css';

export default function Header (){
  return (
  <header className="header">
    <img src='/assets/MBlogo.png' alt="Mythical Buddies Logo" className="logo" />
    <nav className="nav">
      <a href="#about">
        <span>About</span>
      </a>
      <a href="#thebuddies">
        <span>The Buddies</span>
      </a>
      <a href="#team">
        <span>Team</span>
      </a>
      <a href="#mission">
        <span>Mission</span>
      </a>
    </nav>
  </header>
);
  }
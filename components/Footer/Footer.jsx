import './Footer.css';

export default function Footer() {
  return (
  <>
    <div className="footer-break-container">
      <hr className="footer-break" />
    </div>
    <div className="footer">
      <img className="footer-logo" src='/assets/MBlogo.png' alt="MBlogo" />
      <div className="footer-text-container">
        <p className="footer-text">
          Copyright &copy; 2022. Made with ❤️ by Mythical Buddies
        </p>
      </div>
      <div className="footer-social-container">
        <a
          href="https://www.discord.com/"
          target="_blank"
          rel="noreferrer"
          id="discord-icon"
        >
          <img
            src='/assets/discord.svg'
            alt="logo for Discord"
            className="footer-social-icon"
          />
        </a>
        <p id="onhoverdiscord">Coming Soon!</p>
        <a
          href="https://twitter.com/MythicalBuddies"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src='/assets/twitter.svg'
            alt="logo for Twitter"
            className="footer-social-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/rjo.studio"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src='/assets/instagram.svg'
            alt="logo for Instagram"
            className="footer-instagram-icon"
          />
        </a>
      </div>
    </div>
  </>
);
}
import './Mission.css';

export default function Mission() {
  return (
  <div className="main-mission-container" id="mission">
    <img
      className="mission-cloud-container"
      src='/assets/missionCloud.svg'
      alt="purple text the Mission on top of a cloud"
    />
    <div className="mission-body-container">
      <div className="mission-text-container">
        <p>
          Mythical Buddies is a women lead project that focuses on empowering
          women through education, opportunity, and community. In addition, our
          founders focus on creating resources and spaces that can invite more
          minorities into the tech field.
        </p>
      </div>
      <img
        className="mission-img"
        src='/assets/mbteams.jpg'
        alt="Women helping women team"
      />
    </div>
  </div>
);
}
import './Team.css';

export default function Team() {
  return (
  <>
    <div className="team-title" id="team">
      <img src='/assets/teamCloud.svg' alt="Purple text Team on top of cloud" />
    </div>
    <div className="team-info">
      <div className="team-buddy-container">
        <img className="team-buddy-img" src='/assets/teamBuddy3.png' alt="buddy" />
        {/* Buddy 1 */}
        <img className="team-cloud-one" src='/assets/cloud.png' alt="" />
        <img className="team-cloud-two" src='/assets/cloud.png' alt="" />
        <p className="team-description">
          Rebecca is an illustrator and artist that loves childrens
          illustrations. Her art brings a soft presence into the web3 space.
        </p>
      </div>
      <div className="team-buddy-container">
        <img className="team-buddy-img" src='/assets/teamBuddy2.png' alt="buddy" />
        <img className="team-cloud-one" src='/assets/cloud.png' alt="" />
        <img className="team-cloud-two" src='/assets/cloud.png' alt="" />
        <p className="team-description">
          Cassandra is a software engineer and project manager that changed her
          career from the medical field to tech. Her mission is to make a
          positive impact.
        </p>
      </div>
      <div className="team-buddy-container">
        <img className="team-buddy-img" src='/assets/teamBuddy2.png' alt="buddy" />
        <img className="team-cloud-one" src='/assets/cloud.png' alt="" />
        <img className="team-cloud-two" src='/assets/cloud.png' alt="" />
        <p className="team-description">
          Nerissa is a software engineering graduate with a background in HR.
          She has a passion for helping people find opportunities that they
          otherwise would not have access.
        </p>
      </div>
      <div className="team-buddy-container">
        <img className="team-buddy-img" src='/assets/teamBuddy3.png' alt="buddy" />
        <img className="team-cloud-one" src='/assets/cloud.png' alt="" />
        <img className="team-cloud-two" src='/assets/cloud.png' alt="" />
        <p className="team-description">
          Bridgette is a software engineer and Director of Career Services with
          a background in political science. She loves to build relationships
          and empower others in the tech field!
        </p>
      </div>
    </div>
  </>
);
}
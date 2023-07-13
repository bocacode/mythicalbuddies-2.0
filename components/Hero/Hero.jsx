import './Hero.css';

export default function Hero() {
  return (
  <div className="mainHeroContainer">
    <div className="imageContainer">
      <img className="heroBuddiesImage" src='/assets/heroBuddies.png' alt="Buddies Hidden" />
    </div>
    <div className="about-container" id="about">
      <h1 className="about-header">About the Project</h1>
      <p>
        Mythical Buddies is an inspiring NFT (Non-Fungible Token) project led by
        women, dedicated to empowering and supporting women through scholarships
        and learning opportunities. Our project combines the exciting world of
        blockchain technology with a strong commitment to fostering education
        and equal opportunities for women. By collecting unique and enchanting
        NFTs from Mythical Buddies, you not only become part of an inclusive and
        diverse community, but you also contribute directly to empowering women
        through scholarships and educational initiatives. Join us on this
        mythical journey and help us make a lasting impact in the lives of
        women, one NFT at a time.
      </p>
    </div>
    <div className="cloudContainer">
      <img className="heroCloud" src='/assets/cloud.png' alt="Buddies Hidden" />
      <img className="heroCloud" src='/assets/cloud.png' alt="Buddies Hidden" />
      <img className="heroCloud" src='/assets/cloud.png' alt="Buddies Hidden" />
    </div>
    <div className="cloudRowTwoContainer">
      <img className="heroCloud2" src='/assets/cloud.png' alt="Buddies Hidden" />
      <img className="heroCloud2" src='/assets/cloud.png' alt="Buddies Hidden" />
    </div>
  </div>
);
}
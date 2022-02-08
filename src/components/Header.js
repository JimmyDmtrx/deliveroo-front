import Logo from "../img/icon.svg.png";
const Header = ({ restaurant }) => {
  return (
    <header>
      <div className="headerien">
        <div className="container">
          <img className="headerlogo" src={Logo} alt="headerLogo" />
        </div>
      </div>

      <div className="header container">
        <div>
          <h1 className="headerTitre">{restaurant.name}</h1>
          <p className="headerTexte">{restaurant.description}</p>
        </div>
        <img className="headerPicture" src={restaurant.picture} alt="" />
      </div>
    </header>
  );
};

export default Header;

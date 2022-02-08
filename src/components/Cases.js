import Etoile from "../img/etoile.svg.png";

const Cases = ({ meal }) => {
  return (
    <div>
      <div className="cases">
        <div className="ensembleTitreTextePicture">
          <h5 className="titreCase">{meal.title}</h5>
          <p className="texteCase">{meal.description}</p>
          <div className="display caseEtoile">
            <div className="priceCase">{meal.price}€</div>
            {meal.popular && <img className="etoile" src={Etoile} />}
          </div>
        </div>

        {meal.picture && (
          <img className="picturesCase" src={meal.picture} alt="pictureCase" />
        )}
      </div>
    </div>
  );
};
export default Cases;

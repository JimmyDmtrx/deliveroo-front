import "./App.css";
import axios from "axios";
import Logo from "./img/icon.svg.png";
import { useState } from "react";
import { useEffect } from "react";
import Etoile from "./img/etoile.svg.png";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://deliverooooo.herokuapp.com/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      {/* HEADER */}
      <header>
        <div className="headerien">
          <div className="container">
            <img className="headerlogo" src={Logo} alt="headerLogo" />
          </div>
        </div>

        <div className="header container">
          <div>
            <h1 className="headerTitre">{data.restaurant.name}</h1>
            <p className="headerTexte">{data.restaurant.description}</p>
          </div>
          <img className="headerPicture" src={data.restaurant.picture} alt="" />
        </div>
      </header>
      {/* CORPS */}
      <div className="back">
        <div className="background container">
          <div>
            {data.categories.map((mealtype) => {
              return (
                <div>
                  <h2 className="titres">{mealtype.name} </h2>
                  <div className="entreCases">
                    {mealtype.meals.map((meal) => {
                      return (
                        <div>
                          <div className="cases">
                            <div className="ensembleTitreTextePicture">
                              <h5 className="titreCase">{meal.title}</h5>
                              <p className="texteCase">{meal.description}</p>
                              <div className="display caseEtoile">
                                <div className="priceCase">{meal.price}</div>
                                {meal.popular && (
                                  <img className="etoile" src={Etoile} />
                                )}
                              </div>
                            </div>

                            {meal.picture && (
                              <img
                                className="picturesCase"
                                src={meal.picture}
                                alt="pictureCase"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="validerCase">
            <button className="button">Valider mon panier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

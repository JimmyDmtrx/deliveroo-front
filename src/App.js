import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Cases from "./components/Cases";
// import Etoile from "./img/etoile.svg.png";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  const [counter, setCounter] = useState(0);
  // function addToPanier() {
  //   const newPanier = [...panier];
  //   newPanier.push(meal.description);
  //   setPanier(newPanier);
  // }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-app-back.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // console.log(data);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <div className="back">
        <div className="background container">
          <div>
            {data.categories.map((mealtype, index) => {
              return (
                data.categories[index].meals.length > 0 && (
                  <div>
                    <h2 className="titres">{mealtype.name} </h2>
                    <div className="entreCases">
                      {mealtype.meals.map((meal) => {
                        return (
                          <div
                            onClick={() => {
                              const newPanier = [...panier];
                              meal.quantity = 1;
                              counter >= 1 ? (setCounter (counter +1)
                    ) : ( newPanier.push(meal);
                              setPanier(newPanier);)

                             
                            }}
                          >
                            <Cases meal={meal} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="validerCase">
            <button className="button">Valider mon panier</button>
            <div>
              {panier.map((elem, index) => {
                return (
                  <div key={index}>
                    <span>{elem.quantity}</span>
                    <span>{elem.title}</span>
                    <span>{elem.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
